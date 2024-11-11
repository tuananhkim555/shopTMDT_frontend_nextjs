import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    
    th {
        text-align: left;
        text-transform: uppercase;
        color: #888;
        font-weight: 600;
        font-size: .9rem;
        padding: 12px 8px;
        background: #f8f8f8;
        border-bottom: 2px solid #ddd;
    }
    
    td {
        padding: 12px 8px;
        border-bottom: 1px solid rgba(0,0,0,.1);
        vertical-align: middle;
    }

    tr:hover {
        background-color: #f5f5f5;
        transition: all 0.2s ease;
    }

    @media screen and (max-width: 768px) {
        th {
            font-size: .8rem;
            padding: 10px 6px;
        }
        
        td {
            padding: 10px 6px;
            font-size: .9rem;
        }
    }
`;

export default function Table(props) {
    return <StyledTable {...props} />
    
}