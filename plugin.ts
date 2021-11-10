import { IApi } from 'umi';
import { getBundleAndConfigs } from "@umijs/preset-built-in/lib/plugins/commands/buildDevUtils"

export default function (api: IApi) {

    async function init(){
        api.modifyBundleConfig((bundleConfig, { env, type, bundler: { id } }) => {
            // do something

            console.log(JSON.stringify(bundleConfig,null, 2))
            return bundleConfig;
        });
    }
    init()
}