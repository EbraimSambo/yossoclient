import Logout from '@mui/icons-material/Logout'
import { ListItemIcon, MenuItem } from '@mui/material'
import React from 'react'
import {signOut} from 'next-auth/react'
interface Props{
    handleClose: ()=>void
}
const BtnSignOut: React.FC<Props> = ({handleClose}) => {
    function action(){
        signOut()
        handleClose()
    }
    return (
        <MenuItem onClick={action}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Sair
        </MenuItem>
    )
}

export default BtnSignOut