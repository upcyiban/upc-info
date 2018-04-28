import {YibanAuth} from "../../../common/util/getYibanData"
import vqUrl, {appName} from "../config/index"
import marketFetch from "./marketFetch"
/**
 * 因为不知道device应该填什么所以随机填写一个device，后端文档说明device应该填写当前设备名称
 */
const yibanAuth = new YibanAuth(vqUrl , marketFetch , appName , 'mobile')

export default yibanAuth
