import { Text } from "react-native-paper";

export const TglHariIni = ({ tanggal, warna }) => {
    const currentDate = tanggal ? tanggal : new Date();
    const days = [
        'Min',
        'Sen',
        'Sel',
        'Rab',
        'Kam',
        'Jum',
        'Sab',
    ];

    const day = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    return (
        <Text style={{ color: warna }}>
            {day}, {date}/{month}/{year}
        </Text >
    );
};