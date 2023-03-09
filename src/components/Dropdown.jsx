import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        key: '1',
        label: 'Item 1',
    },
    {
        key: '2',
        label: 'Item 2',
    },
    {
        key: '3',
        label: 'Item 3',
    },
];
const DropDownMenu = () => (
    <Dropdown
        menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
        }}
    >
        <Space>
            Selectable
            <DownOutlined />
        </Space>
    </Dropdown>
);
export default DropDownMenu;