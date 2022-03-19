import axios from "axios";

export const getSlidesData = async( url: string): Promise<any> => {
    const { data } = await axios.get(url)
    return data.slides;
}
