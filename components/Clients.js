import Image from "next/image";
import primepisos from "../public/primepisos.png";

export default function Clients() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-gray-800">
      <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* card */}
        <div class="flex flex-col border border-gray-200 rounded-xl dark:border-gray-700 shadow-md hover:shadow-2xl">
          <div class="flex-auto p-4 md:p-6">
            <svg
              width="120"
              height="65"
              viewBox="0 0 164 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_22)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M152.9 18.4358C160.794 18.4358 165.651 24.8168 163.48 32.3483C161.351 39.7381 153.937 44.5252 146.333 43.4213C139.873 42.4844 136.158 36.5198 137.905 29.8965C139.652 23.2731 145.957 18.4376 152.9 18.4358V18.4358ZM154.312 31.9211C156.423 22.1657 148.949 20.771 147.059 30.8298C145.24 40.5261 152.465 40.4543 154.312 31.9211V31.9211Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M133.274 38.3434C133.024 40.0468 133.339 40.9927 134.377 41.4145C135.063 41.691 136.339 41.7269 137.147 41.6658C137.342 41.6471 137.539 41.6471 137.735 41.6658C138.392 41.7341 138.695 42.4825 138.343 43.0479C138.123 43.3625 137.859 43.6457 137.561 43.8898C135.161 46.0616 132.38 47.2678 129.325 47.0542C125.896 46.8209 123.948 44.1662 123.793 44.0029C123.611 44.1985 123.43 44.3618 123.235 44.5413C121.81 45.8857 120.369 46.8748 118.81 47.4132C113.513 49.3715 108.463 46.0904 109.421 40.6445L115.674 5.46918C115.834 4.55197 116.27 4.06733 117.162 3.75502L123.785 1.1003C124.846 0.617467 125.576 1.18466 125.355 2.31547L118.946 38.9968C118.785 40.0935 118.857 40.8761 119.208 41.4074C119.813 42.321 121.305 42.4718 122.255 42.0446C123.03 41.6999 123.57 40.9784 123.745 39.9876L130.003 4.80685C130.162 3.89143 130.598 3.405 131.491 3.09089L138.22 0.398484C139.091 8.81337e-06 139.79 0.498999 139.738 1.2439C139.727 1.38243 139.709 1.52027 139.683 1.65674L133.274 38.3434Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.8665 18.3783C33.3149 18.364 33.5829 19.3637 33.3638 20.2953L30.4489 36.5736C29.8949 40.0486 27.8309 40.8258 21.8237 41.5115C20.7809 41.6443 19.9734 41.0502 20.1255 40.0935L23.2214 23.2318C24.0017 18.5955 26.3644 18.3209 31.8665 18.3783Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M76.0245 22.758C77.4729 20.6902 78.9756 19.1681 80.8205 18.5381C85.1312 17.0519 88.0226 21.1623 86.634 24.6965C86.0847 26.0068 85.2035 27.1543 84.0757 28.0279C83.0021 28.8733 81.121 29.7923 79.7541 29.4639C78.3872 29.1354 77.3733 27.922 77.9436 26.2994C78.1808 25.594 77.8187 25.1165 77.3588 25.0142C76.3902 24.797 76.1295 26.0912 75.9394 26.7607C74.8531 30.618 73.7577 39.6017 73.4536 41.2997C73.22 42.6172 72.5483 42.9151 71.2701 42.6925L67.5296 42.0177C65.3914 41.6012 63.8797 40.0253 64.1983 37.787L65.3407 29.918C66.1899 23.9157 69.6081 20.1158 76.0245 22.758Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M94.2561 36.5431C93.6351 36.4282 93.4523 36.7926 93.5211 37.148C93.6786 37.9683 94.8319 38.995 95.5434 39.3576C96.6949 39.9391 98.0781 40.063 99.4124 39.9984C101.585 39.8889 103.629 39.1781 105.63 38.2896C106.023 38.1101 106.522 37.7978 106.859 38.2339C107.129 38.5768 106.841 39.0129 106.642 39.3629C103.866 44.2649 96.894 47.3001 91.4897 45.9683C86.2682 44.6813 83.1343 39.9445 83.8023 34.3479C84.876 25.3265 95.127 18.7984 103.855 21.7833C105.937 22.5013 107.415 23.7578 108.255 25.2458C109.912 28.1877 109.099 32.0504 105.597 34.4969C102.519 36.6508 97.993 37.0852 94.3123 36.5503H94.2561V36.5431ZM98.1306 31.1583C98.9453 30.6503 99.6225 29.9934 99.9701 29.3113C100.642 27.9956 99.7655 26.5686 98.3732 26.5417C96.3237 26.5022 94.7414 28.9774 94.0787 30.6826C93.7347 31.8404 93.7166 32.1186 94.3992 32.1545C95.7173 32.2066 97.0197 31.8564 98.1306 31.1511V31.1583Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.3756 3.02891C23.4275 -3.58722 8.09987 0.33651 5.12341 17.8228L0.0160055 45.3499C-0.141507 46.3479 0.848834 46.9869 1.85004 46.732C6.85243 45.5868 9.81621 43.957 10.7921 38.9815L13.2869 25.1748C13.4318 24.2935 13.649 23.5127 14.6756 23.3009C15.13 23.2058 15.5953 23.2668 16.0552 23.2542C18.6279 23.1932 20.4112 21.9637 20.5814 19.4974C20.5905 19.359 20.57 19.2202 20.5212 19.0901C20.4724 18.9601 20.3965 18.8417 20.2984 18.7428C20.2003 18.6438 20.0822 18.5665 19.9519 18.5159C19.8216 18.4653 19.682 18.4426 19.5422 18.4492H15.3364C13.9333 18.3756 13.8084 17.4979 13.8699 16.2576C14.037 13.9913 14.5668 11.7659 15.4396 9.66479C17.1922 5.69977 23.0437 2.87275 27.101 5.17745C27.7111 5.52028 27.9085 5.80388 27.9049 6.07492C27.9049 6.37646 27.6188 6.66007 27.1807 6.99393C26.5293 7.49204 26.0147 8.14458 25.6844 8.8915C25.354 9.63843 25.2185 10.4557 25.2902 11.2682C25.362 12.0807 25.6387 12.8622 26.0949 13.5409C26.5511 14.2195 27.1722 14.7735 27.901 15.1518C28.6298 15.5302 29.4428 15.7207 30.2653 15.7058C31.0879 15.691 31.8934 15.4713 32.6078 15.0669C33.3222 14.6626 33.9226 14.0866 34.3536 13.3919C34.7847 12.6973 35.0325 11.9063 35.0744 11.0918C35.308 8.11755 33.6586 4.92436 31.3756 3.02891Z"
                  fill="#65B32E"
                ></path>
                <path
                  d="M161.273 13.6164H160.575V14.5641H160.155V11.7048H161.268C161.891 11.7048 162.135 11.9812 162.135 12.4443V12.8751C162.149 13.0141 162.116 13.1538 162.041 13.2721C161.966 13.3903 161.853 13.4805 161.721 13.5284L162.499 14.5641H161.996L161.272 13.6164H161.273ZM161.273 12.0835H160.575V13.2359H161.268C161.614 13.2359 161.721 13.0994 161.721 12.8769V12.4461C161.726 12.1517 161.587 12.0835 161.273 12.0835Z"
                  fill="#65B32E"
                ></path>
                <path
                  d="M161.092 15.9444C160.548 15.9458 160.016 15.7872 159.563 15.4886C159.11 15.19 158.757 14.7648 158.548 14.267C158.339 13.7691 158.283 13.2209 158.389 12.6919C158.494 12.1628 158.756 11.6767 159.14 11.295C159.524 10.9133 160.014 10.6532 160.547 10.5477C161.081 10.4421 161.634 10.4959 162.136 10.7022C162.639 10.9085 163.068 11.258 163.371 11.7065C163.673 12.155 163.834 12.6822 163.833 13.2215C163.832 13.9437 163.543 14.636 163.027 15.1465C162.512 15.657 161.813 15.9439 161.085 15.9444H161.092ZM161.092 10.8504C160.62 10.85 160.157 10.9886 159.764 11.2487C159.371 11.5087 159.064 11.8785 158.883 12.3113C158.702 12.7441 158.654 13.2205 158.746 13.6802C158.838 14.1398 159.065 14.5622 159.399 14.8938C159.733 15.2254 160.159 15.4514 160.622 15.5431C161.086 15.6349 161.567 15.5883 162.003 15.4093C162.44 15.2303 162.814 14.9269 163.077 14.5375C163.339 14.1481 163.48 13.6901 163.48 13.2215C163.48 12.5933 163.229 11.9907 162.781 11.5461C162.333 11.1016 161.726 10.8513 161.092 10.8504V10.8504Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M152.451 4.84274C153.295 4.16426 154.2 3.60424 154.96 4.80325C155.951 6.36305 156.3 9.61009 155.445 11.3404C153.237 15.8044 141.992 17.7788 137.639 18.023C120.012 19.012 97.6146 11.9686 81.7293 13.8031C77.6304 14.2769 73.87 15.3826 70.6853 17.3768C66.1808 20.202 64.3757 23.1206 62.701 27.7048C62.1126 29.3203 61.555 30.9591 60.7258 32.6014C59.6487 34.9373 57.9191 36.9182 55.7418 38.3099C53.5644 39.7015 51.0305 40.4455 48.4399 40.4538C45.8493 40.4621 43.3106 39.7344 41.1242 38.3567C38.9378 36.9791 37.1954 35.0093 36.1031 32.6804C36.011 32.5102 35.9404 32.3293 35.8931 32.1419C35.8514 31.7829 36.2045 31.6573 36.4815 31.8781C46.6329 39.1099 63.7113 31.476 60.8181 20.2738C60.6944 19.8396 60.547 19.4123 60.3764 18.994C60.321 18.8591 60.2733 18.7213 60.2333 18.5812V18.5812C60.1138 18.1109 60.2768 17.9027 60.7891 17.5491C62.3914 16.4488 63.9068 15.4562 65.6177 14.5103C68.6294 12.8109 71.8522 11.5094 75.2043 10.6386C86.7154 7.68054 100.785 9.95472 112.5 11.3368C118.884 12.0889 125.355 12.7889 131.759 12.3151C139.535 11.7389 146.317 9.78958 152.451 4.84274Z"
                  fill="#65B32E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.4205 24.7001C34.1079 27.0909 35.0457 29.8534 37.3632 31.0865C40.8031 32.9209 44.8876 33.4199 48.7131 32.7306C52.1531 32.115 55.3993 30.5588 57.6425 28.1051C60.6624 24.8042 60.5574 20.2881 57.7692 16.3949C50.9238 7.44178 36.505 11.6419 35.6631 22.5839C35.6251 23.0811 35.6052 23.5531 35.5816 24.0431C35.5805 24.2716 35.5253 24.4966 35.4205 24.7001V24.7001Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M121.499 64.7038H120.262C120.232 64.7071 120.202 64.7043 120.174 64.6956C120.145 64.6869 120.118 64.6726 120.096 64.6535C120.073 64.6343 120.054 64.6108 120.041 64.5843C120.027 64.5578 120.019 64.5288 120.018 64.4992C119.974 64.2677 119.934 64.0379 119.886 63.7579C119.577 64.1562 119.174 64.4738 118.714 64.6833C118.253 64.8929 117.748 64.988 117.242 64.9605C115.721 64.9264 114.662 64.2067 114.195 62.7725C113.695 61.2756 113.733 59.6531 114.304 58.181C114.934 56.5333 116.212 55.7202 117.948 55.5694C119.089 55.4725 120.193 55.6753 121.287 55.9966C121.649 56.1043 121.73 56.282 121.727 56.6266C121.71 58.2241 121.727 59.8234 121.727 61.4209V64.4938C121.728 64.5224 121.722 64.5508 121.711 64.5773C121.701 64.6038 121.684 64.6276 121.663 64.6474C121.643 64.6672 121.618 64.6824 121.591 64.6922C121.564 64.7019 121.535 64.7059 121.506 64.7038H121.499ZM119.608 59.7678C119.608 59.0695 119.619 58.3713 119.596 57.6767C119.596 57.5259 119.489 57.2782 119.38 57.2477C118.356 56.9605 117.027 56.9012 116.437 58.2349C115.851 59.5401 115.796 61.0191 116.284 62.3632C116.585 63.2302 117.278 63.5659 118.233 63.4115C119.065 63.2805 119.576 62.6935 119.603 61.7961C119.621 61.1247 119.605 60.4463 119.608 59.7678Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M56.8857 62.8963C56.1941 64.4633 54.619 65.1669 52.6636 64.9551C51.141 64.79 50.0674 63.7974 49.6582 62.1299C49.3197 60.7639 49.3088 59.389 49.7958 58.0572C50.339 56.5674 51.4651 55.7471 53.0366 55.5802C54.6081 55.4132 55.975 55.7238 56.8549 57.1543C57.666 58.5436 57.6588 61.1391 56.8857 62.8981V62.8963ZM54.9775 62.3453C55.3722 61.3365 55.3939 59.0821 54.9485 58.0374C54.4054 56.7487 52.546 56.781 52.0173 58.0769C51.5665 59.1808 51.5592 61.297 51.963 62.3686C52.5134 63.8207 54.4126 63.7794 54.9775 62.3453Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M79.0607 61.1427C79.1802 63.1602 81.0685 64.0738 83.3588 62.7581C83.3852 62.741 83.4152 62.73 83.4464 62.7259C83.4777 62.7218 83.5095 62.7247 83.5396 62.7343C83.5696 62.7439 83.5971 62.7601 83.62 62.7816C83.6429 62.8031 83.6606 62.8294 83.672 62.8586C83.8259 63.1817 83.9798 63.5012 84.1391 63.8369C84.1622 63.8814 84.1685 63.9326 84.1569 63.9813C84.1453 64.03 84.1165 64.073 84.0757 64.1025C83.5118 64.5196 82.8513 64.7899 82.1548 64.8887C80.6847 65.1256 79.258 65.0467 78.0939 63.9607C76.3232 62.3058 76.3105 57.4451 79.3033 55.984C80.2917 55.4908 81.4346 55.3969 82.4915 55.722C84.1608 56.212 84.6786 58.4144 83.462 59.7283C82.7179 60.5342 81.7185 60.8052 80.6847 60.9847C80.1578 61.0691 79.6201 61.096 79.0552 61.1534L79.0607 61.1427ZM79.0426 59.766C80.0184 59.6636 80.9635 59.6277 81.7402 59.0067C81.9583 58.8484 82.1138 58.6196 82.18 58.3597C82.2461 58.0998 82.2186 57.8252 82.1023 57.5833C81.885 57.1543 81.4016 56.9587 80.8186 57.0682C79.7323 57.271 78.9575 58.4036 79.0426 59.766V59.766Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M95.0745 61.1498C95.194 63.1691 97.0805 64.0846 99.3708 62.7653C99.3974 62.7482 99.4275 62.7371 99.4589 62.7328C99.4904 62.7286 99.5224 62.7313 99.5526 62.7407C99.5829 62.7501 99.6107 62.7661 99.634 62.7874C99.6574 62.8087 99.6756 62.8349 99.6876 62.864C99.8379 63.1853 99.9936 63.5102 100.151 63.844C100.175 63.8882 100.182 63.9395 100.171 63.9884C100.159 64.0373 100.131 64.0804 100.09 64.1097C99.5256 64.5268 98.8651 64.7971 98.1686 64.8959C96.6967 65.1328 95.2718 65.0538 94.1077 63.9661C92.337 62.313 92.3244 57.4541 95.3171 55.9894C96.306 55.4979 97.4483 55.404 98.5054 55.7274C100.175 56.2192 100.694 58.4198 99.4758 59.7354C98.7299 60.5396 97.7323 60.8124 96.6985 60.9829C96.1716 61.0691 95.6357 61.096 95.069 61.1624L95.0745 61.1498ZM95.0564 59.7713C96.0304 59.6672 96.9773 59.6331 97.754 59.0139C97.972 58.855 98.1274 58.6259 98.1934 58.3658C98.2595 58.1057 98.2322 57.831 98.1161 57.5887C97.9007 57.1597 97.4173 56.9659 96.8307 57.0753C95.7462 57.271 94.9713 58.409 95.0564 59.7713V59.7713Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.9419 62.7204C42.7747 63.1422 43.5822 63.4833 44.5038 63.4151C45.2569 63.363 45.6878 62.8963 45.6353 62.2035C45.623 62.0004 45.5487 61.8058 45.4223 61.6455C45.2959 61.4852 45.1233 61.3668 44.9274 61.306C44.4295 61.1104 43.9172 60.947 43.412 60.7801C41.9057 60.2757 41.2775 59.4931 41.3571 58.2259C41.444 56.8636 42.2624 55.9194 43.7289 55.6412C45.1954 55.363 46.5387 55.661 47.7119 56.6553C47.734 56.6741 47.7521 56.697 47.7652 56.7227C47.7782 56.7484 47.786 56.7765 47.788 56.8052C47.79 56.8339 47.7863 56.8628 47.7769 56.89C47.7676 56.9173 47.7529 56.9425 47.7337 56.9641L47.0221 57.8328C46.9906 57.87 46.9473 57.8954 46.8992 57.9049C46.8511 57.9143 46.8013 57.9073 46.7578 57.8849C46.3187 57.6367 45.8653 57.4144 45.3999 57.219C44.6884 56.9515 43.6058 57.0628 43.4374 57.9369C43.3834 58.165 43.4164 58.4049 43.5301 58.6103C43.6437 58.8157 43.8299 58.9723 44.0529 59.0498C44.5599 59.2706 45.0958 59.4195 45.6136 59.6134C46.5188 59.9526 47.3535 60.3637 47.6558 61.3868C48.1591 63.0848 47.176 64.6177 45.3022 64.9246C43.995 65.1436 42.6009 64.869 41.3951 64.2964C41.062 64.1384 41.1073 64.0594 41.2702 63.6825L41.6323 62.8479C41.6422 62.8179 41.6585 62.7903 41.6801 62.7672C41.7018 62.744 41.7282 62.7257 41.7576 62.7136C41.787 62.7015 41.8187 62.6959 41.8505 62.697C41.8823 62.6982 41.9135 62.7062 41.9419 62.7204V62.7204Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M91.3521 64.4687C90.0848 65.0826 88.8174 65.1867 87.5374 64.6303C86.9707 64.3826 86.681 63.8872 86.5724 63.2984C86.5095 62.9736 86.4762 62.6438 86.4728 62.313C86.4656 59.2197 86.4656 56.1259 86.4728 53.0314V52.6383C86.4715 52.6088 86.4764 52.5794 86.4873 52.5519C86.4981 52.5244 86.5146 52.4995 86.5358 52.4787C86.5569 52.4579 86.5822 52.4417 86.61 52.4312C86.6378 52.4206 86.6676 52.416 86.6973 52.4175H88.3648C88.394 52.4165 88.4232 52.4215 88.4505 52.4321C88.4777 52.4428 88.5025 52.4589 88.5232 52.4794C88.5439 52.5 88.5602 52.5245 88.5709 52.5515C88.5816 52.5785 88.5867 52.6075 88.5857 52.6365V55.7651H90.7691C90.7974 55.7641 90.8255 55.7688 90.8519 55.779C90.8782 55.7892 90.9022 55.8045 90.9224 55.8242C90.9425 55.8438 90.9585 55.8673 90.9691 55.8933C90.9798 55.9192 90.9851 55.9471 90.9846 55.9751V57.2208C90.9841 57.2763 90.9616 57.3295 90.922 57.3687C90.8824 57.408 90.8288 57.4303 90.7728 57.4308H88.6001V58.6154C88.6001 59.6637 88.5911 60.7119 88.6001 61.7602C88.611 63.2787 89.3243 63.7346 90.7528 63.1189C90.7612 63.1133 90.7703 63.1091 90.78 63.1064C90.8071 63.0938 90.8365 63.0869 90.8663 63.0861C90.8962 63.0853 90.9259 63.0907 90.9536 63.1018C90.9813 63.1129 91.0064 63.1296 91.0273 63.1507C91.0482 63.1719 91.0645 63.1971 91.0751 63.2248C91.1964 63.5353 91.3232 63.8495 91.4626 64.2013C91.4817 64.2514 91.481 64.3069 91.4605 64.3566C91.44 64.4062 91.4013 64.4463 91.3521 64.4687V64.4687Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M61.5803 64.7092H59.8404C59.8122 64.7102 59.784 64.7055 59.7577 64.6953C59.7313 64.6851 59.7074 64.6698 59.6872 64.6501C59.667 64.6305 59.6511 64.607 59.6404 64.581C59.6297 64.5551 59.6245 64.5272 59.625 64.4992V56.063C59.6233 56.0339 59.6276 56.0048 59.6376 55.9774C59.6477 55.95 59.6633 55.925 59.6834 55.9038C59.7036 55.8826 59.728 55.8657 59.755 55.8542C59.782 55.8427 59.8111 55.8368 59.8404 55.8369H61.0481C61.1011 55.8336 61.1535 55.8503 61.1947 55.8835C61.236 55.9168 61.2631 55.9642 61.2707 56.0163C61.3232 56.3017 61.3866 56.6033 61.4518 56.9659L61.7849 56.51C62.1123 56.0571 62.5917 55.7347 63.1371 55.6005C63.6826 55.4663 64.2584 55.5291 64.7614 55.7776C65.0329 55.8835 64.9949 56.0828 64.9768 56.2228C64.9225 56.6176 64.8247 57.0089 64.7324 57.4146C64.7275 57.445 64.7156 57.474 64.6977 57.4992C64.6798 57.5244 64.6564 57.5452 64.6292 57.5601C64.6019 57.575 64.5716 57.5835 64.5406 57.585C64.5095 57.5866 64.4785 57.5811 64.45 57.569L64.1639 57.4684C62.8567 57.0484 61.8356 57.7233 61.8103 59.0929C61.7668 60.7622 61.794 62.4332 61.7922 64.1061V64.5046C61.7903 64.5592 61.7672 64.611 61.7277 64.6491C61.6883 64.6873 61.6354 64.7088 61.5803 64.7092V64.7092Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M104.433 64.7254H102.695C102.667 64.7261 102.639 64.7212 102.612 64.7109C102.586 64.7007 102.562 64.6853 102.542 64.6657C102.522 64.6461 102.506 64.6227 102.495 64.5969C102.485 64.571 102.479 64.5433 102.479 64.5154V56.0792C102.477 56.0501 102.481 56.0209 102.491 55.9935C102.501 55.9661 102.517 55.9411 102.537 55.92C102.558 55.8989 102.582 55.8822 102.609 55.871C102.636 55.8598 102.665 55.8542 102.695 55.8548H103.906C103.958 55.8504 104.01 55.8651 104.051 55.8963C104.093 55.9275 104.121 55.9728 104.131 56.0235C104.185 56.3089 104.246 56.6105 104.312 56.9731C104.46 56.7702 104.552 56.6428 104.647 56.5171C104.974 56.0644 105.453 55.742 105.998 55.6074C106.543 55.4729 107.118 55.5352 107.621 55.783C107.895 55.8907 107.855 56.0882 107.835 56.23C107.782 56.6248 107.685 57.0125 107.59 57.4218C107.586 57.4522 107.574 57.4811 107.556 57.5063C107.539 57.5315 107.515 57.5525 107.488 57.5675C107.461 57.5825 107.431 57.5913 107.4 57.5931C107.369 57.5949 107.338 57.5897 107.31 57.578C107.214 57.5403 107.129 57.5062 107.026 57.4756C105.717 57.0574 104.695 57.7323 104.661 59.0911C104.619 60.7622 104.648 62.4332 104.645 64.1025V64.5046C104.645 64.5329 104.641 64.561 104.63 64.5874C104.62 64.6138 104.605 64.638 104.585 64.6585C104.565 64.679 104.542 64.6955 104.516 64.7069C104.49 64.7184 104.461 64.7247 104.433 64.7254V64.7254Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M109.87 55.8135H111.488C111.519 55.8103 111.549 55.8137 111.578 55.8235C111.607 55.8332 111.633 55.849 111.655 55.8698C111.677 55.8907 111.695 55.916 111.706 55.9441C111.717 55.9722 111.722 56.0023 111.72 56.0325V64.4884C111.72 64.5179 111.715 64.5471 111.703 64.5742C111.691 64.6013 111.674 64.6257 111.653 64.646C111.631 64.6662 111.606 64.6818 111.578 64.6917C111.55 64.7017 111.52 64.7058 111.49 64.7038H109.861C109.832 64.7051 109.803 64.7004 109.777 64.6902C109.75 64.6799 109.725 64.6642 109.705 64.6442C109.685 64.6241 109.669 64.6001 109.658 64.5736C109.647 64.5471 109.642 64.5187 109.644 64.4902V56.0289C109.641 55.9992 109.645 55.9694 109.656 55.9416C109.667 55.9138 109.684 55.8887 109.705 55.8681C109.727 55.8475 109.753 55.8319 109.781 55.8225C109.81 55.813 109.84 55.81 109.87 55.8135Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M111.905 53.2198C111.905 53.9217 111.398 54.4009 110.656 54.3937C109.913 54.3866 109.453 53.9342 109.448 53.2468C109.456 52.9314 109.587 52.6314 109.814 52.41C110.041 52.1886 110.345 52.0629 110.663 52.0594C110.982 52.0559 111.289 52.1749 111.52 52.3913C111.752 52.6077 111.89 52.9047 111.905 53.2198V53.2198Z"
                  fill="#E40428"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M74.844 56.0146C75.1626 56.9369 75.2798 57.9158 75.188 58.8865C75.007 61.2935 73.7958 63.862 71.567 64.6733C70.5387 65.0485 68.7445 65.1831 68.109 64.0774C67.8682 63.6556 67.8084 63.1189 67.7958 62.5392V57.7826C67.7958 57.4972 67.7559 57.3518 67.4482 57.4038C67.2019 57.4604 66.9432 57.4226 66.724 57.298C66.5542 57.189 66.4256 57.0275 66.3582 56.8385C66.2907 56.6496 66.2882 56.4438 66.351 56.2533C66.6715 55.1997 68.3824 55.4187 69.0667 55.8584C69.7511 56.2982 69.8235 57.0772 69.8253 57.8149C69.8253 59.4902 69.8253 61.1684 69.8253 62.8497C69.8253 63.2087 69.9122 63.2661 70.2707 63.2338C72.8452 63.013 73.3486 58.8506 72.9611 56.8564C72.9032 56.5495 72.8271 56.2605 72.7457 55.9589C72.7353 55.926 72.7331 55.891 72.7394 55.8571C72.7458 55.8232 72.7603 55.7913 72.7819 55.7642C72.8035 55.7371 72.8315 55.7157 72.8633 55.7018C72.8952 55.6878 72.93 55.6818 72.9647 55.6843L74.4566 55.6951C74.6684 55.7005 74.7571 55.7974 74.844 56.0146Z"
                  fill="#E40428"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3_22">
                  <rect width="164" height="65" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                "Adorei a facilidade de uso e as muitas opções de relatórios e
                consultas disponíveis para gerenciar meus clientes."
              </em>
            </p>
          </div>

          <div class="p-4 rounded-b-xl md:px-6">
            <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
              Fulano de tal
            </h3>
            <p class="text-sm text-gray-500">Gerente sênior de vendas</p>
          </div>
        </div>
        <div class="flex flex-col border border-gray-200 rounded-xl dark:border-gray-700 shadow-md hover:shadow-2xl">
          <div class="flex-auto p-4 md:p-6">
            <Image
              src={primepisos}
              alt="Picture of the author"
              width={80}
              height={60}
              className=" rounded-xl dark:bg-gray-200"
            />

            <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                "O sistema é incrivelmente flexível, oferecendo diversas opções
                de comissão para atender às necessidades únicas do meu negócio."
              </em>
            </p>
          </div>

          <div class="p-4 rounded-b-xl md:px-6">
            <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
              Fulano de Tal
            </h3>
            <p class="text-sm text-gray-500">Operador de Caixa</p>
          </div>
        </div>
        <div class="flex flex-col border border-gray-200 rounded-xl dark:border-gray-700 shadow-md hover:shadow-2xl">
          <div class="flex-auto p-4 md:p-6">
            <svg
              class="w-20 h-auto sm:w-24 text-gray-700 dark:text-gray-300"
              width="140"
              height="70"
              viewBox="0 0 140 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z"
                fill="currentColor"
              ></path>
              <path
                d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z"
                fill="currentColor"
              ></path>
              <path
                d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z"
                fill="currentColor"
              ></path>
              <path
                d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z"
                fill="currentColor"
              ></path>
              <path
                d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z"
                fill="currentColor"
              ></path>
              <path
                d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z"
                fill="currentColor"
              ></path>
              <path
                d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z"
                fill="currentColor"
              ></path>
              <path
                d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z"
                fill="currentColor"
              ></path>
              <path
                d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z"
                fill="currentColor"
              ></path>
              <path
                d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z"
                fill="currentColor"
              ></path>
              <path
                d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z"
                fill="currentColor"
              ></path>
            </svg>

            <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                "O controle avançado de produção e estoque me permitiu otimizar
                minha operação e aumentar minha eficiência geral."
              </em>
            </p>
          </div>

          <div class="p-4 rounded-b-xl md:px-6">
            <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
              Fulano de tal
            </h3>
            <p class="text-sm text-gray-500">Diretor de operações</p>
          </div>
        </div>
      </div>
    </div>
  );
}
