import React from 'react'
import {
  Form,
  InternalFieldList as FieldList,
  SchemaMarkupField as Field,
  SchemaForm
} from '@formily/antd' // 或者 @formily/next
import styled from 'styled-components'
import { Button, Input } from 'antd'
import { FormTextBox, FormLayout } from '@formily/antd-components'
const RowStyleLayout = styled(props => <div {...props} />)
`.ant-btn {
    margin-right: 16px;
  }
  .ant-form-item {
    display: inline-flex;
    margin-right: 16px;
    margin-bottom: 16px;
  }
`
const DemoFomilyList = prop => {
    return (
        <div style={{display: 'flex'}}>
        <h2 style={{marginRight: '20px'}}>发券策略</h2> 
        <Form>
          <FieldList
            name="userList"
            initialValue={[
              { username: 'morally', age: 21 },
              { username: 'bill', age: 22 }
            ]}
          >
            {({ state, mutators }) => {
              const onAdd = () => mutators.push()
              return (
                <div>
                  {state.value.map((item, index) => {
                    const onRemove = index => mutators.remove(index)
                    // const onMoveUp = index => mutators.moveUp(index)
                    // const onMoveDown = index => mutators.moveDown(index)
                    return (
                      <RowStyleLayout key={item} style={{display: 'flex', 'align-items': 'center'}}>
                        <SchemaForm
                            components={{Input}}
                            onSubmit={(values)=>{
                            console.log(values)
                            }}
                        >
                             <FormLayout inline>
                                <FormTextBox
                                title=""
                                text={`${index!==state.value.length-1 ? '姓名': ''}%s性别%s年龄%s岁`}
                                gutter={8}
                                >
                                <Field
                                    x-component="Input"
                                    required
                                    name="name"
                                    x-component-props={{ style: { width: 200 } }}
                                    // description="姓名"
                                />
                                <Field
                                    x-component="Input"
                                    enum={['男', '女']}
                                    default='女'
                                    required
                                    name="sex"
                                    // description="性别"
                                />
                                <Field
                                    x-component="Input"
                                    default={30}
                                    required
                                    name="age"
                                    // description="年龄"
                                />
                                </FormTextBox>
                                <Field
                                    x-component="Input"
                                    default="备注"
                                    required
                                    name="address"
                                />
                            </FormLayout>
                        </SchemaForm>
                        {
                            index!==state.value.length-1 && (
                                <Button onClick={onRemove.bind(null, index)}>移除</Button>
                            )
                        }
                        {
                            index===state.value.length-1 && (
                                <Button onClick={onAdd}>添加</Button>
                            )
                        }
                        
                        {/* <Button onClick={onMoveUp.bind(null, index)}>up</Button>
                        <Button onClick={onMoveDown.bind(null, index)}>down</Button> */}
                        
                      </RowStyleLayout>
                    )
                  })}
                </div>
              )
            }}
          </FieldList>
        </Form>
      </div>
    )
}
export default DemoFomilyList;