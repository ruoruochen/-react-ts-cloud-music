import { ReactElement, MouseEvent } from 'react';
import '@/assets/styles/iconfont.css';

/**
 * 纯UI展示组件
 *
 * 使用iconfont管理图标
 */
interface IProps {
    /**
     * iconfont类型，与iconfont平台保持一致
     */
    type: string;
    color?: string;
    width?: number;
    height?: number;
    onClick?: (event: MouseEvent) => void;
}

const Icon = (props: IProps): ReactElement => {
    const { type, color, width, height, onClick } = props;
    return (
        <i style={{ color, width, height, fontStyle: 'normal' }} className={`iconfont ${type}`} onClick={onClick}></i>
    );
};

export default Icon;
