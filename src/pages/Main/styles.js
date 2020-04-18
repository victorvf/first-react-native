import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #bdbdbd;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #bdbdbd;
`;

export const SubmitButton = styled(RectButton)`
    align-items: center;
    justify-content: center;
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    flex: 1;
    margin-top: 10px;
    background: #7159c1;
    align-self: stretch;
    border-radius: 4px;
    padding: 12px;
    justify-content: center;
    align-items: center;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const DeleteButton = styled(RectButton)`
    padding: 0 10px;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 4px;
    background: #ff5656;

    align-items: center;
    justify-content: center;
`;

export const Buttons = styled.View`
    flex-direction: row;
`;
