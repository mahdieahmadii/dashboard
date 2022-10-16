import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';

export function ModalForm() {
    const [inputValue, setInputValue] = useState({
        name: "",
        family: "",
        age: 0,
        size: 0,
        birthday: 0,
        city: "",
    })
    function handleChange(obj) {
        setInputValue((prev) => {
            return { ...prev, ...obj }
        })
    }

    console.log(inputValue);
    return (
        <>
            <Form name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off">

                <Form.Item
                    label="نام :"
                    name="نام :"
                    rules={[
                        {
                            required: true,
                            message: 'نام خود را وارد نمایید!',
                        },
                    ]}
                >
                    <Input onChange={e => handleChange({ name: e.target.value })} />
                </Form.Item>
                <Form.Item
                    label="نام خانوادگی :"
                    name="نام خانوادگی :"
                    rules={[
                        {
                            required: true,
                            message: 'نام خانوادگی خود را وارد نمایید!',
                        },
                    ]}
                >
                    <Input onChange={e => handleChange({ family: e.target.value })} />
                </Form.Item>
                <Form.Item
                    label="سن :"
                    name="سن :"
                    rules={[
                        {
                            required: true,
                            message: 'سن خود را وارد نمایید!',
                        },
                    ]}>
                    <InputNumber onChange={e => handleChange({ age: e })} />
                </Form.Item>
                <Form.Item
                    label="قد :"
                    name="قد :"
                    rules={[
                        {
                            required: true,
                            message: 'قد خود را وارد نمایید',
                        },
                    ]}>
                    <InputNumber onChange={e => handleChange({ size: e })} />
                </Form.Item>
                <Form.Item
                    label="تاریخ تولد :"
                    name="تاریخ تولد :"
                    rules={[
                        {
                            required: true,
                            message: 'تاریخ تولد خود را وارد نمایید!',
                        },
                    ]}>
                    <DatePicker 
                    // defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} 
                    />                </Form.Item>
                <Form.Item
                    label="محل سکونت  :"
                    name="محل سکونت :"
                    rules={[
                        {
                            required: true,
                            message: 'محل سکونت خود را وارد نمایید!',
                        },
                    ]}
                >
                    <Input onChange={e => handleChange({ city: e.target.value })} />
                </Form.Item>
                <Button type="primary" htmlType="button">اضافه کردن</Button>
            </Form>
        </>
    );
}