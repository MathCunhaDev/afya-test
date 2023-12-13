import Arrow from "~common/assets/svgs/arrow.svg";
import Logo from "~common/assets/images/logo.png";
import { IconButton } from "@mui/material";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.StyledHeader>
      <IconButton>
        <img src={Arrow} alt="Icone de retorno" />
      </IconButton>
      <S.Logo src={Logo} alt="Logo" />
    </S.StyledHeader>
  );
};
