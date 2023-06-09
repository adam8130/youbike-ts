import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'
import { Data, CityItem, AreaItem } from '../types'


class Store {
    
    constructor () {
        makeAutoObservable(this)
    }

    data: Data[] = []
    rawData: Data[] = []
    filteredData: Data[] = []
    areaArr: AreaItem[] = []
    city = '台北市'
    cities: CityItem[] = [
        {
            city: '台北市',
            url: 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json',
        },
        {
            city: '新北市',
            url: 'https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json?page=0&size=5000'
        }
    ]

    setData = (act: Data[]) => this.data = act
    setRawData = (act: Data[]) => this.rawData = act
    setFilteredData = (act: Data[]) => this.filteredData = act
    setAreaArr = (act: { sarea: string, checked: boolean }[]) => this.areaArr = act
    setCity = (act: string) => this.city = act

}

const store = new Store()
const context = createContext(store)
export const useStore = () => useContext(context)