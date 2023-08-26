import WorkExpeience from "@/components/domain-components/SnsIconGloup/WorkExpeience";
import PageContainer from "@/components/ui-components/PageContainer/index";
import Thumbnail from "@/components/ui-components/Thumbnail";
import { ME } from "@/domain/user/constant";
import { clsx } from "clsx";
import Layout from "../Layout/index";

/**
 * @description EXPERIENCEページ
 */
export default function Home() {
  return (
    <div>
      <Layout>
        {/* コンテナーの役割 */}
        <PageContainer>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"], // レイアウト的にいらないはず
              ["text-white", "z-index-10"]
            )}
          >
            {/* 見出し */}
            <h2 className={clsx(["text-3xl"])}>Work Experience</h2>

            {/* 詳細 */}
            <WorkExpeience />
            <div className={"text-[14px]"}>
              <p className={"mb-4"}>
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and I'm frontend engineer and I'm frontend engineer and
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and
              </p>

              <p>
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and I'm frontend engineer and I'm frontend engineer and
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and
              </p>
            </div>
            {/* 次のページ */}
            <a href="/works">what's next ? click ! →</a>
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
