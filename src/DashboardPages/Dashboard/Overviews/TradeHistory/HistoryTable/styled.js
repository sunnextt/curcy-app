import styled from 'styled-components';

const Ttable = styled.div`
  .ant-table-thead > tr > th {
    position: relative;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    text-align: left;
    background: #eaeffa;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s ease;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s;
    background: #eaeffa;
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: #eaeffa;
  }
`;

export default Ttable;
