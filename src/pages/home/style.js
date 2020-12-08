import styled from 'styled-components';
import List from './components/List';
import huang from '../../statics/huang.png'


export const HomeWrapper = styled.div`
   width: 960px;
   margin: 0 auto;
   overflow: hidden;
`;

export const HomeLeft = styled.div`
   margin-left: 15px;
   float: left;
   padding-top: 15px;
   width: 625px;
`;

export const HomeRight = styled.div`
   width: 280px;
   float: right;
`;

export const TopicWrapper = styled.div`
   padding: 0px 0 10px 0;
   overflow: hidden;
   margin-left: -18px;
   border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 11px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0px 10px;
  margin-left: 18px;
  margin-bottom: 18px;
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
`

export const ListInfo = styled.div`
  margin: 0 auto;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;

`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background-image: url(${huang});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border-radius: 3px;
`;

export const WriterTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 10px;
  font-size: 14px;
  color: #969696;
  text-align: left
`;

export const WriterInfo = styled.div`
  
`;

export const WriterItem = styled.div`
  margin-top: 10px;
  .intro {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;

export const P = styled.p`
  padding-top: 5px;
  margin-right: 20px;
  font-size: 14px;
  display: block;
  color: #333;
`;

export const A = styled.a`
  float: right;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`