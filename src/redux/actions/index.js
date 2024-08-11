import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

export const getFlights = createAsyncThunk("flight/getFlight", async () => {
    //* 1 api isteği at
    const res = await axios.request(options)

    //* API den gelen verileri formatla ( aircraft dizisi içerisindeki her bir uçuş verisi dizi olarak gelmişti projede kullanımı kolaylaştırmak için bu dizileri nesneye çevirdik )
    const formatted = res.data.aircraft.map((item) => ({
            id: item[0],
            code: item[1],
            lat: item[2],
            lng: item[3],
    }))
    
    //* 3 aksiyonun payload ını return et
    return formatted
})