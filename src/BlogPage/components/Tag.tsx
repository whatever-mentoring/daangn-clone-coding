import styled from 'styled-components';

const TagWrapper = styled.div`
  border-radius: 40px;
  line-height: 14px;
  border: none;
  padding: 14px 20px;
  font-size: 18px;
  color: #868b94;
  background-color: #f2f3f6;
  cursor: pointer;
  &:hover {
    background-color: #212124;
    color: #ffffff;
    font-weight: 600;
  }
`;

export default function Tag(props: any) {
  return <TagWrapper>{props.text}</TagWrapper>;
}
