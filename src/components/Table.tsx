import React from 'react'
import { styled } from '@mui/material'
import { useStore } from '../store/store'
import { observer } from 'mobx-react-lite'


const Table = () => {

    const { data, city } = useStore()

    return (
        <RootBox>
            <table>
                <thead>
                  <tr>
                    <th style={{width: "15%"}} align="center">縣市</th>
                    <th style={{width: "15%"}} align="center">區域</th>
                    <th style={{width: "40%"}} align="center">站點名稱</th>
                    <th style={{width: "15%"}} align="center">可借車輛</th>
                    <th style={{width: "15%"}} align="center">可還空位</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.sno}>
                      <td style={{width: "15%"}} align="center">{city}</td>
                      <td style={{width: "15%"}} align="center">{item.sarea}</td>
                      <td style={{width: "40%"}} align="center">{item.sna}</td>
                      <td style={{width: "15%"}} align="center">{item.sbi}</td>
                      <td style={{width: "15%"}} align="center">{item.bemp}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </RootBox>
    )
}

const RootBox = styled('div')(() => `
    width: 90%;
    margin: auto;
    border: 1px solid gray;
    border-radius: 20px;
    overflow: hidden;
        table {
            width: 100%;
            border-collapse: collapse;
                thead {
                    display: table;
                    table-layout: fixed;
                    width: 100%;
                    background: rgb(172, 211, 0);
                        th {
                            padding: 20px;
                            color: white;
                        }
                }
                tbody {
                    display: block;
                    overflow-y: scroll; 
                    height: 320px;
                    tr {
                        display: table;
                        table-layout: fixed;
                        width: 100%;
                        text-align: center;
                            td {
                                padding: 20px 0;
                            }
                    }
                    tr:nth-of-type(even) {
                        background-color: #f1f1f1;
                    }
                }
        }
    }
`)

export default observer(Table)