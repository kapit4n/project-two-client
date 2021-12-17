import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined, TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { I18nService } from "services";
import { LanguageSelectorProps } from "./LanguageSelector.interface";

const LanguageSelector = (props: LanguageSelectorProps.IProps) => {
    const { languages } = props;

    const { i18n } = useTranslation();

    const [visible, setVisible] = useState(false);

    const handleVisibleChange = () => {
        setVisible(!visible);
    };

    const changeLanguage = async (e: any) => {
        const { key } = e;
        try {
            if (key === "0") {
                await I18nService.changeLanguage("en");
                i18n.changeLanguage("en");
            } else if (key === "1") {
                await I18nService.changeLanguage("es");
                i18n.changeLanguage("es");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const showMenu = (
        <Menu onClick={changeLanguage}>
            {languages.map((lng: string, index: number) => (
                <Menu.Item key={index}>
                    <span>{lng}</span>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={showMenu} onVisibleChange={handleVisibleChange} visible={visible}>
            <img
                width={50}
                alt="Logo"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png"
            />
        </Dropdown>
    );
};

export default LanguageSelector;
