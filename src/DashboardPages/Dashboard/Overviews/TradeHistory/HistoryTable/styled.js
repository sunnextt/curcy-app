import styled from 'styled-components';

const Ttable = styled.div`
  .ant-table-thead > tr > th {
    position: relative;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    text-align: left;
    background: ${({ BGcolor }) => (BGcolor ? BGcolor : ' #eaeffa')};
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s ease;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s;
    background: ${({ BGcolor }) => (BGcolor ? BGcolor : ' #eaeffa')};
  }

  .ant-table-thead th.ant-table-column-has-sorters:hover {
    background: ${({ BGcolor }) => (BGcolor ? BGcolor : ' #eaeffa')};
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${({ BGcolor }) => (BGcolor ? BGcolor : ' #eaeffa')};
  }
`;
//  BGcolor === 'rejected' ? '#FDD4D4' : BGcolor === 'pending' ? '#FAFDD4' : '#4FAC16';
export const StatusDiv = styled.div`
  background: ${({ BGcolor }) => (BGcolor === 'rejected' ? '#FDD4D4' : BGcolor === 'pending' ? '#FAFDD4' : ' #DCFDD4')};
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  h6 {
    font-family: Museo Sans Rounded;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: ${({ BGcolor }) => (BGcolor === 'rejected' ? '#AC1616' : BGcolor === 'pending' ? '#AC9D16' : '#4FAC16')};
    margin: 0;
  }
`;
export default Ttable;
