import { ActionsBar } from "components/ActionsBar/ActionsBar"

export const VideoInfo = ({ title, views, uploadDate }) => {
    return <div>
        <h2>{title}</h2>
        <div>
            <p>{views} views</p>
            <p>{uploadDate}</p>
        </div>
        <ActionsBar/>
    </div>
}