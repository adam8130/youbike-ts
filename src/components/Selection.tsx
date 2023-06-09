import React, { useRef } from 'react'
import { 
    Checkbox, FormControlLabel, FormGroup, MenuItem, 
    OutlinedInput, Select, styled
} from '@mui/material'
import { useStore } from '../store/store'
import { observer } from 'mobx-react-lite'
import { Data, AreaItem } from '../types'


type EVENT = React.ChangeEvent<HTMLInputElement>


const Selection = () => {

    const { city, cities, data, rawData, areaArr, filteredData } = useStore()
    const { setData, setCity, setFilteredData, setAreaArr } = useStore()
    const ref = useRef<HTMLInputElement>(null)

    const selectAllChange = (e: EVENT) => {
        setAreaArr(areaArr.map(item => ({
            sarea: item.sarea,
            checked: e.target.checked
        })))
        if (e.target.checked) {
            setFilteredData([]);
            setData(rawData);
            (ref.current as HTMLInputElement).value = ""
        }
        else {
            setFilteredData([...filteredData, ...data])
            setData([])
        }
    }

    const checkboxChange = (e: EVENT, item: AreaItem) => {
        setAreaArr(areaArr.map(arrItem => 
            arrItem.sarea === item.sarea ? {...arrItem, checked: !item.checked} : arrItem
        ))
        if (e.target.checked) {
            let arr = filteredData.filter(data => data.sarea === item.sarea)
            setFilteredData(filteredData.filter(data => data.sarea !== item.sarea))
            setData([...data, ...arr])
        }
        else {
            let arr = data.filter(data => data.sarea === item.sarea)
            setFilteredData([...filteredData, ...arr])
            setData(data.filter(data => data.sarea !== item.sarea))
        }
    }

    const inputChange = (e: EVENT) => {
        let arr: Array<string> = []
        let newData: Data[] = rawData.filter(item => item.sna.includes(e.target.value))
        newData.forEach(item => !arr.includes(item.sarea) && arr.push(item.sarea))
        console.log(arr)
        setAreaArr(areaArr.map(arrItem => 
            !arr.includes(arrItem.sarea) ? {...arrItem, checked: false} : {...arrItem, checked: true}
        ))
        setData(newData)
    }

    return (
        <RootBox>
            <div className='left-side'>
                <h3>站點資訊</h3>

                <div className='selection'>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        sx={{ width: '200px' }}
                        value={city}
                        input={<OutlinedInput label="City" />}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        {cities.map((item) => (
                            <MenuItem key={item.city} value={item.city}>{item.city}</MenuItem>
                        ))}
                    </Select>
                    <input ref={ref} type="search" placeholder='搜尋站點' onChange={(e) => inputChange(e)} />
                </div>

                <FormControlLabel
                    sx={{mt: '20px'}}
                    control={
                        <Checkbox 
                            color="success" 
                            defaultChecked 
                            onChange={selectAllChange}
                        />
                    }
                    label="全部勾選"
                />                        

                <FormGroup>
                    {areaArr.map((item, i) =>
                        <FormControlLabel
                            key={i}
                            control={
                                <Checkbox 
                                    color="success" 
                                    checked={areaArr[i].checked} 
                                    onChange={(e) => checkboxChange(e, item)}
                                />
                            }
                            label={item.sarea}
                        />
                    )}
                </FormGroup>

            </div>
            
            <div className='right-side'>
                <img src={require('../images/frame.png')} alt=""/>
            </div>

        </RootBox>
    )
}

const RootBox = styled('div')(() => `
    width: 90%;
    margin: auto;
    display: flex;
        .left-side {
            width: 50%;
            display: flex;
            flex-direction: column;
            h3 {
                color: rgb(172, 211, 0);
            }
            .selection {
                width: 80%;
                height: 40px;
                display: flex;
                gap: 20px;
                    input {
                        width: 400px;
                        padding: 10px;
                        font-size: 16px;
                    }
            }
            .MuiFormGroup-root {
                width: 80%;
                height: 200px;
                display: flex;
                flex-wrap: wrap;
            }
        }
        .right-side {
            width: 50%;
            display: flex;
            align-items: flex-end;
                img {
                    width: 90%;
                }
        }
`)


export default observer(Selection)