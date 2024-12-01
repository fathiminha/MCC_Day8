import { useState } from "react";
import {useNavigate} from "react-router-dom"; 

export default function Login(){
    return(
        <div>
            <h1> Login here </h1>
            <table>
                <tr>
                    <td> Username: </td>
                    <td> <input type="text" name="username" /></td>
                </tr>
                <tr>
                    <td> Password: </td>
                    <td> <input type="password" name="pwd" /> </td>
                </tr>
                <tr>
                    <td style={{color: 'red'}} colSpan={2}> {user.error} </td>
                </tr>
            </table>
            <button> Login </button>
        </div>
    )
}