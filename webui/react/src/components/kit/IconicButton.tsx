import { Button as AntdButton } from 'antd';
import React, { MouseEvent } from 'react';

import Icon, { IconName } from 'components/kit/Icon';

interface ButtonProps {
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  iconName: IconName;
  loading?: boolean | { delay?: number };
  onClick?: (event: MouseEvent) => void;
  text: string;
  type?: 'primary' | 'link' | 'text' | 'ghost' | 'default' | 'dashed';
}

const IconicButton: React.FC<ButtonProps> = ({
  type = 'default',
  iconName,
  ...props
}: ButtonProps) => {
  return (
    <AntdButton
      style={{
        height: '100%',
        padding: '16px',
        paddingBottom: '8px',
        width: '120px',
      }}
      type={type}
      {...props}>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Icon name={iconName} title={props.text} />
        <p>{props.text}</p>
      </div>
    </AntdButton>
  );
};

export default IconicButton;
