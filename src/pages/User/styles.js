import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Header = styled.View`
    align-items: center;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #BDBDBD;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`;

export const Bio = styled.Text`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Starred = styled.View`
    background: #E2E2E2;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const OwnerAvatar = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background: #eee;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    font-weight: bold;
    color: #333;
`;

export const Author = styled.Text`
    font-size: 13px;
    color: #666;
    margin-top: 2px;
`;

export const NoStars = styled.Text`
    font-size: 15px;
    color: #666;
    text-align: center;
    margin-top: 20px;
`;

export const Loading = styled.ActivityIndicator`
    color: #666;
    margin-top: 20px;
`;
