import { UserMenu } from "components/UserMenu/UserMenu"
import { Logo } from "../Logo/Logo"
import { SearchBox } from "../SearchBox/SearchBox"

const user = {
    isPremium: true,
    avatarURL : ''
}
export const AppBar = () => {
    return <header>
        <Logo text={user.isPremium ? 'Premium' : 'Youtube'} />
        <SearchBox />
        <UserMenu avatar={user.avatarURL}/>
    </header>
}