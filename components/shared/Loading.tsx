import { logo } from "./images"


const Loading = () => {
  return (
    <div className="loading-success">
        <div className='loading-success-content'>
            <img src={logo.src} alt="" />
        </div>
    </div>
  )
}

export default Loading
