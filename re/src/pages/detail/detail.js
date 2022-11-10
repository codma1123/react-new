import { useParams } from "react-router-dom"



const Detail = () => {
  const { elementId } = useParams()
  return (
    <div>
      this is detail {elementId}
    </div>
  )
}

export default Detail