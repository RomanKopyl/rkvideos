import { AlertButton, Alert } from "react-native";


export interface ErrorInterface {
    error?: any,
    message?: string,
    onPressOk?: () => void,
};

export function showMessage({
    message,
    onPressOk,
    onPressCancel,
    cancelable = true,
}: {
    message: string,
    onPressOk?: () => void,
    onPressCancel?: () => void,
    cancelable?: boolean,
}) {
    const buttonArray: AlertButton[] = [];
    if (onPressCancel) buttonArray.push({
        text: 'Cancel',
        onPress: onPressCancel,
        style: 'cancel'
    });
    if (onPressOk) buttonArray.push({
        text: 'OK',
        onPress: onPressOk,
    });

    Alert.alert(
        '', message,
        buttonArray,
        { cancelable: cancelable }
    )
}

export function showError({
    error,
    message,
    onPressOk,
}: ErrorInterface) {
    let errorMessage;
    if (message && message.length > 0) errorMessage = message;
    else if (typeof error === 'string') errorMessage = error;
    else if (error?.message) errorMessage = error?.message;
    else errorMessage = 'Something went wrong';

    const onPress = () => { };

    showMessage({
        message: errorMessage,
        onPressOk: onPressOk ?? onPress,
    });
}

export function timeConverter(UNIX_timestamp: number | string) {

    var a;

    if (typeof UNIX_timestamp === 'number') {
        a = new Date(UNIX_timestamp * 1000);
    }
    else {
        a = new Date(UNIX_timestamp)
    }
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes().toString().padStart(2, '0');
    var sec = a.getSeconds().toString().padStart(2, '0');
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;

    return time;
}

export function convertToTime(seconds: number) {
   return new Date(seconds * 1000).toISOString().slice(14, 19);
}