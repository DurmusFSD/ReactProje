import './Avatar.css'

const Avatar=({size, source})=>{
    return(
        <div style={{width:size,height:size}} id='avatar'>
            <img src={source} />
          </div>
    )
}
export default Avatar
