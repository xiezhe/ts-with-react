import React, {useState, useEffect} from 'react';

const LikeButton: React.FC = ()=>{
    const [like, setLike] = useState(0);
    const [switchStatus, setSwitchStatus] = useState(false);
    useEffect(()=>{
        document.title = `点赞人数${like}`;
    })
    return (
        <>
            <button onClick={()=>setLike(like+1)}>点赞数量：{like}</button>
            <button onClick={()=>setSwitchStatus(!switchStatus)}>开关状态{switchStatus? '开': '关'}</button>
        </>
    )
}
export default LikeButton;