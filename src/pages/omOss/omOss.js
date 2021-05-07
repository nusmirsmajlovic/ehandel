import { React, Component} from "react";
import "./styles.scss"


class OmOss extends Component{

    render(){
        return(
            <div>
                <h1 className="omOssColor">Om oss</h1>
                <table className="omOssColor">
                    <tr>
                        <td>Nummer :</td>
                        <td>07526511545</td>
                    </tr>
                    <tr>
                        <td>E-mail :</td>
                        <td>Silvana@yahoo.com</td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default OmOss;