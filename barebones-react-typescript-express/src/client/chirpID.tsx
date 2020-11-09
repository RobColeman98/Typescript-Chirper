import React, { Fragment } from "react"
import {IChirp} from "./utils/types"

export default class ChirpID extends React.Component<IIdProps, IIdState> {
    constructor(props: IIdProps) {
        super(props)
        this.state = {
            name: "",
            text: ""
        }
    }
}


interface IIdProps {

}

interface IIdState {
    name: string,
    text: string
}



