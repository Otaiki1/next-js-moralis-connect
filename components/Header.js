import {ConnectButton} from "web3uikit";

export default function Header(){
    return(
        <nav>
            Head
            <ConnectButton moralisAuth={false} />   
        </nav>
       
    )
}