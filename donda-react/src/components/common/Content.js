const Content = ({api, counter}) => (  
  <div>
    <div>{api.data.id}</div>
    <div>{api.data.title}</div>
    <div>{api.data.body}</div>
  </div>  
)

export default Content