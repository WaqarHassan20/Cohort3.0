import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "linkedin" | "facebook" | "instagram";
}

function Card({ title, link, type }: CardProps) {
  return (
    <>
      <div>
        <div className="bg-white border-gray-200 border rounded-md p-3 max-w-72">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-lg">
              <div className="text-gray-500 pr-2">
                <ShareIcon />
              </div>
              <div className="font-semibold">{title}</div>
            </div>

            <div className="flex items-center">
              <div className="text-gray-500 pr-2">
                <a href="" target="_blank">
                  <ShareIcon />
                </a>
              </div>

              <div className="text-gray-500 pr-2">
                <ShareIcon />
              </div>
            </div>
          </div>

          <div className="pt-4">
            {/* {type === "twitter" && (
              <blockquote className="twitter-tweet px-4">
                <p lang="zxx" dir="ltr">
                  <a href="https://t.co/YEn8B1QO2x">
                    pic.twitter.com/YEn8B1QO2x
                  </a>
                </p>
                &mdash; Tolulope Michael (@im_tolumichael)
                <a href={link}>February 14, 2025</a>
              </blockquote>
            )}

            {type === "youtube" && (
              <iframe
                className="w-full h-full rounded-sm"
                width="300"
                height="240"
                src={link.replace("watch", "embed")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )} */}

            <div className="pt-4">
              {type === "twitter" && (
                <blockquote className="twitter-tweet px-4">
                  <p lang="zxx" dir="ltr">
                    <a href="https://t.co/YEn8B1QO2x">
                      pic.twitter.com/YEn8B1QO2x
                    </a>
                  </p>
                  &mdash; Tolulope Michael (@im_tolumichael)
                  <a href={link}>February 14, 2025</a>
                </blockquote>
              )}

              {type === "youtube" && (
                <iframe
                  className="w-full h-full rounded-sm"
                  width="300"
                  height="240"
                  src={link.replace("watch", "embed")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}

              {type === "facebook" && (
                <iframe
                  className="w-full h-full rounded-sm"
                  src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                    link
                  )}`}
                  width="300"
                  height="240"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}

              {type === "instagram" && (
                <iframe
                  className="w-full h-full rounded-sm"
                  src={`${link}embed`}
                  width="300"
                  height="240"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media"
                  allowFullScreen
                ></iframe>
              )}

              {type === "linkedin" && (
                <iframe
                  className="w-full h-full rounded-sm"
                  src={`https://www.linkedin.com/embed/feed/update/${encodeURIComponent(
                    link
                  )}`}
                  width="300"
                  height="240"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
