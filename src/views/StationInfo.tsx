import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useStore } from "../store/store"
import { observer } from 'mobx-react-lite'
import Selection from '../components/Selection'
import Table from '../components/Table'
import { Data, AreaItem } from '../types'



function StationInfo() {

    const { city, cities } = useStore()
    const { setData, setAreaArr, setRawData } = useStore()


    // 取得資料
    useEffect(() => {
        const url = cities.find((item) => item.city === city)!.url
        fetch(url)
        .then(res => res.json())
        .then(res => {
            let arr: AreaItem[] = []
            res.forEach((item: Data) => !arr.some(arrItem => arrItem.sarea === item.sarea) && arr.push({
                sarea: item.sarea,
                checked: true
            }))
            
            setAreaArr(arr)
            setData(res)
            setRawData(res)
            console.log(res)
        })
    }, [city, cities, setAreaArr, setData, setRawData])

    return (
        <RootBox>
            <Selection/>
            <Table/>
        </RootBox>
    )
}


const RootBox = styled('div')(() => `

`)

export default observer(StationInfo)