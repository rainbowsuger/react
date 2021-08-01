import React from 'react'
import {
  SchemaForm,
  FormButtonGroup,
  SchemaMarkupField as Field,
  Submit,
  Reset,
  FormSpy,
} from '@formily/antd' // 或者 @formily/next
import { Switch } from 'antd'
import { Select, Input, FormLayout, FormItemGrid, FormTextBox, NumberPicker } from '@formily/antd-components'
import DemoFomilyList from './DemoFomilyList'

const DemoFomily = props => {
  const schema = {
    type:"object",
    properties:{
      name:{
        type:"string",
        title:"名称",
        "x-component":"Input",
        "x-component-props": {
          placeholder: "请输入我的名字",
        }
      },
      age:{
        type:"Select",
        title:"年龄",
        "enum": [
          {
            "label": "显示",
            "value": true
          },
          {
            "label": "隐藏",
            "value": false
          }
        ],
        "x-component":"Select",
      },
      sex:{
        type:"string",
        title:"性别男",
        "x-component":"Switch",
        "x-component-props": {
          defaultChecked: true
        }
      }
    }
  }
  const list = [1,2,3];
  return (
    <div>
      <SchemaForm
        components={{ Input, Switch, Select }}
        schema={schema}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
      
        <FormButtonGroup>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </SchemaForm>
      <hr/>
      <SchemaForm
        components={{ Select, Input, NumberPicker, DemoFomilyList }}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
      <FormLayout inline>
        <Field
          name="sex"
          type="number"
          title="女生"
          default={1}
          x-component="Select"
          x-props = {{
            dataSource: [
              { label: '是', value: 1 },
              { label: '否', value: 2 }
            ]
          }}
        />
        <Field
          name="name"
          type="string"
          title="年龄"
          x-component="Input"
        />
      </FormLayout>
      <FormSpy>
        {({ state, form }) => {
          // 由于formSpy会监听所有周期，包括form未init之前，所以form实例可能为null
          return (
            <div>
              name: {form && form.getFieldValue('name')}
              <br />
              age: {form && form.getFieldValue('age')}
            </div>
          )
        }}
      </FormSpy>
      <FormItemGrid gutter={20}>
        <Field x-component="Input" name="a1" title="field1" />
        <Field x-component="Input" name="a2" title="field2" />
        <Field x-component="Input" name="a3" title="field3" />
        <Field x-component="Input" name="a4" title="field4" />
      </FormItemGrid>
      <FormItemGrid gutter={20} cols={[6, 6]}>
        <Field x-component="Input" name="a5" title="field5" />
        <Field x-component="Input" name="a6" title="field6" />
      </FormItemGrid>
      {
        list.map(item => {
          return (
              <FormLayout inline>
                <FormTextBox
                  title={`个人信息${item}`}
                  text="姓名%s性别%s年龄%s岁"
                  // gutter={20}
                >
                  <Field
                    x-component="Input"
                    required
                    name="name"
                    x-component-props={{ style: { width: 200 } }}
                    // description="姓名"
                  />
                  <Field
                    x-component="Select"
                    enum={['男', '女']}
                    default='女'
                    required
                    name="sex"
                    // description="性别"
                  />
                  <Field
                    x-component="NumberPicker"
                    default={30}
                    required
                    name="age"
                    // description="年龄"
                  />
                </FormTextBox>
                <FormSpy>+++</FormSpy>
                <Field type="string" name="address" title="地址" x-component="Input"/>
              </FormLayout>
          
          )
        })
      }
      <Field
        x-component="DemoFomilyList"
        required
        name="list"
      />
      
      </SchemaForm>
      <hr/>
    </div>
  )
}
export default DemoFomily;