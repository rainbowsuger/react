// interface List {
//   id: number;
//   name: string;
// }
// interface ListProps {
//   list: List[];
//   setList: (params: ListProps['list']) => void
// }

function DemoList ({list}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>名称</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => 
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
    
  )
}
  
export default DemoList;
