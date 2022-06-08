/*
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-07 16:26:40
 * @LastEditors: sj
 * @LastEditTime: 2022-06-07 17:01:35
 */
import React from 'react';
import styles from './Cell.module.css';

interface CellProps {
  label?: string
  centerLabel?: string
  right?: boolean
  backgroundColor?: string
  onClick?: () => void;
}

export const Cell = ({
  label = '默认内容',
  centerLabel,
  right = true,
  backgroundColor,
  ...props
}: CellProps) => {
  return (<div className={styles.cell}>
    <span>{label}</span>
    {centerLabel && <span>{centerLabel}</span>}
    {right ? (<span className={styles.right}></span>) : (<span></span>)}
  </div>)
}