import { Table } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../Store/user/user.action';
function ShowUser() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const editData = useSelector((state) => state.user.editValues);
  console.log(usersData);

  const columns = [
    {
      title: 'عملیات',
      key: 'action',
      render: (_, record) => (
        <div className='btn-group'>
          <button className='btn btn-danger btn-sm' onClick={() => dispatch(userActions.edit(usersData.find((item) => item.id === record.id)))}>ویرایش</button>
          <button className='btn btn-warning btn-sm' onClick={() => dispatch(userActions.deleteUser(record.id))}>حذف</button>
        </div>
      ),
    },
    {
      title: 'محل زندگی',
      dataIndex: 'city',
      key: 'city',
      render: (item) => editData?.city === item ? <input defaultValue={editData.city} /> : item,
    },
    {
      title: 'تارخ تولد',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (item) => editData?.birthday === item ? <input defaultValue={editData.birthday} /> : item,
    },
    {
      title: 'قد',
      dataIndex: 'size',
      key: 'size',
      render: (item) => editData?.size === item ? <input defaultValue={editData.size} /> : item,
    },
    {
      title: 'سن',
      dataIndex: 'age',
      key: 'age',
      render: (item) => editData?.age === item ? <input defaultValue={editData.age} /> : item,
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'family',
      key: 'family',
      render: (item) => editData?.family === item ? <input defaultValue={editData.family} /> : item,
    },
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
      render: (item) => editData?.name === item ? <input defaultValue={editData.name} /> : item,
    },
  ];

  return <Table columns={columns} dataSource={usersData} rowKey={(item) => item.id} />
};

export default ShowUser;