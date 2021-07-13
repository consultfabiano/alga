import { PostObject } from "./Post";

interface SidebarProps{
    post:PostObject
}

export default function Sidebar (props:SidebarProps) {
    return <div>
        <p>II Coríntios 2.14 NVI </p>
        <p>{props.post.title}</p>
    </div>
}