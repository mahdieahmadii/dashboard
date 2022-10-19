import { Table } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../Store/user/user.action';
import { Button } from '../Button';
function ShowUser() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const editData = useSelector((state) => state.user.editValues);
  const initial= { name: "", family: "", age:"", size:"", birthday: "", city: "" }
  const [editValue, setEditValue] = useState(initial);
  console.log(editValue);
  function handleChange(obj) {
    setEditValue((prev) => {
      return { ...prev, ...obj }
    })
  }
  function handleEdit(record) {
    const newEdit=usersData.find((item)=>item.id===record.id);
    dispatch(userActions.edit(newEdit));
    setEditValue(newEdit)

  }
  function handleSave() {
    dispatch(userActions.save(editValue))
    setEditValue(initial)
  }
  const columns = [
    {
      title: 'عملیات',
      key: 'action',
      render: (_, record) => (
        <>
          {record.id === editValue?.id ?
            <div className='btn-group'>
              <Button className='success'>لغو</Button>
              <Button className='info' onClick={() => handleSave()}>ذخیره</Button>
            </div>
            :
            <div className='btn-group'>
              <Button className='danger' onClick={() => dispatch(userActions.deleteUser(record.id))}>حذف</Button>
              <Button className='warning' onClick={() =>handleEdit(record)}>ویرایش</Button>
            </div>
          }
        </>
      ),
    },
    {
      title: 'محل زندگی',
      dataIndex: 'city',
      key: 'city',
      render: (item, record) => {
        return record.id === editValue?.id ? <input defaultValue={editValue.city} onChange={(e) =>handleChange({ city: e.target.value })} /> : item

      }
    },
    {
      title: 'تارخ تولد',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (item, record) => editValue?.id === record.id ? <input defaultValue={editValue.birthday} onChange={(e) => handleChange({ birthday: e.target.value })} /> : item,
    },
    {
      title: 'قد',
      dataIndex: 'size',
      key: 'size',
      render: (item, record) => editValue?.id === record.id ? <input defaultValue={editValue.size} onChange={(e) => handleChange({ size: e.target.value })} /> : item,
    },
    {
      title: 'سن',
      dataIndex: 'age',
      key: 'age',
      render: (item, record) => editValue?.id === record.id ? <input defaultValue={editValue.age} onChange={(e) => handleChange({ age: e.target.value })} /> : item,
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'family',
      key: 'family',
      render: (item, record) => editValue?.id === record.id ? <input defaultValue={editValue.family} onChange={(e) => handleChange({ family: e.target.value })} /> : item,
    },
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
      render: (item, record) => editValue?.id === record.id ? <input defaultValue={editValue.name} onChange={(e) => handleChange({ name: e.target.value })} /> : item,
    },
  ];

  return <Table columns={columns} dataSource={usersData} rowKey={(item) => item.id} />
};

export default ShowUser;