import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
export default function Media() {
    return (
        <div className="grid grid-cols-2 w-fit gap-y-2 [&>*]:flex [&>*]:flex-row [&>*]:gap-3">
            <div>
            &nbsp;
            <FaGithub className="scale-110 mt-[2px]"/>
                <p>Github</p>
            </div>
            <a className="text-splash underline" href="https://www.github.com/jeffizmyname" target="_blank">github.com/jeffizmyname</a>
            <div>
            &nbsp;
            <FaFacebook className="scale-110 mt-[2px]"/>
                <a>Facebook</a>
            </div>
            <a className="text-splash underline" href="https://www.facebook.com/jeffizmyname/" target="_blank">facebook.com/jeffizmyname</a>
            <div>
            &nbsp;
            <FaInstagram className="scale-110 mt-[2px]"/>
                <a>Instagram</a>
            </div>
            <a className="text-splash underline" href="https://www.instagram.com/stanislaws_solarz" target="_blank">instagram.com/stanislaws_solarz</a>
            <div>
            &nbsp;
            <FaDiscord className="scale-110 mt-[2px]"/>
                <a>Discord</a>
            </div>
            <a className="text-splash underline" href="https://www.discordapp.com/users/376306346980802563" target="_blank">discordapp.com/users/376306346980802563</a>
        </div>
    )
}