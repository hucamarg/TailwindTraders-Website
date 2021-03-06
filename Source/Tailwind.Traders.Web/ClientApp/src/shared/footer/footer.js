import React from "react";
import { Link } from "react-router-dom";

import { withNamespaces } from "react-i18next";

import { ReactComponent as Logo } from "../../assets/images/logo-horizontal.svg";

const Footer = ({ t }) => {
    return (
        <footer className="foo">
            <div className="foo__content">
                <Link className="foo__link" to="/">
                    <Logo />
                </Link>
                <div className="foo__links">
                    <Link className="foo__link" to="/">
                        {t("shared.footer.link")}
                    </Link>
                    <Link className="foo__link" to="/">
                        {t("shared.footer.link")}
                    </Link>
                    <Link className="foo__link" to="/">
                        {t("shared.footer.link")}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default withNamespaces()(Footer);
