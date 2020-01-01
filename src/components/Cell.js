import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../tetrominos';


const Cell = ({type}) => (<StyledCell type={type} color={TETROMINOS[type].color}>{console.log('cell rerendered')}</StyledCell>)

export default React.memo(Cell);
