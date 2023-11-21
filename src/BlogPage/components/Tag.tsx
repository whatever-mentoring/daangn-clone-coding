import styled from 'styled-components';

const TagWrapper = styled.div<{ $isActive: boolean }>`
  border-radius: 40px;
  border: none;
  padding: 14px 20px;
  font-size: 18px;
  cursor: pointer;
  line-height: 22px;
  color: ${(props) => (props.$isActive ? '#ffffff' : '#868b94')};
  background-color: ${(props) => (props.$isActive ? '#212124' : '#f2f3f6')};
  font-weight: ${(props) => (props.$isActive ? '600' : '400')};
  &:hover {
    background-color: #212124;
    color: #ffffff;
    font-weight: 600;
  }
`;

interface TagProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Tag({ isActive, onClick, text }: TagProps) {
  return (
    <TagWrapper $isActive={isActive} onClick={onClick}>
      {text}
    </TagWrapper>
  );
}
