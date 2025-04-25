const portfolioData = {
  portfolioList: [
    {
      name: "White Rabbit",
      period: "2023.11 (3주)",
      project: "Team Project",
      role: "백엔드 담당",
      techStack: ["Express", "Node.js", "MongoDB", "Mongoose"],
      description:
        "같은 부트캠프를 수강중인 수강생들, 코치님들과 쉽게 소통하고 지식공유를 할 수 있는 커뮤니티를 제작하였습니다.",
      summary:
        "같은 부트캠프를 수강하는 수강생 및 수료생을 위한 커뮤니티 플랫폼입니다. 같은 목표를 가지고 모인 사람들과 네트워크를 형성할 수 있는 공간이 있었으면 좋겠다는 생각으로 프로젝트를 제작하게 되었습니다.",
      meaning:
        "게시판의 CRUD부터 mongoose-paginate-v2를 이용한 페이지네이션, 좋아요 기능, 인기 게시물 설정, 검색 기능 등 게시판과 관련된 전반적인 기능들을 모두 담당하여 구현하였고, 배포까지 경험해 본 프로젝트였습니다.\n\n프로젝트 최종 시연 발표 도중 실시간으로 댓글이 200개 이상 달리는 바람에 트래픽이 몰려 서버가 터지는 상황이 발생했었습니다. 당황스러웠지만 실제 운영되고 있는 커뮤니티 서비스를 잠시나마 간접 체험해 보고, 이후 이를 방어할 수 있는 방법에 대해서도 공부하는 계기가 된 값진 경험이었습니다.",
      thumbnail: "white-rabbit/thumbnail.png",
      images: [
        "white-rabbit/login.png",
        "white-rabbit/signup.png",
        "white-rabbit/board.png",
        "white-rabbit/post.png",
        "white-rabbit/mypage.png",
        "white-rabbit/follow.png",
        "white-rabbit/admin.png",
      ],
      github: "https://github.com/bokyung39/White-Rabbit",
      deploy: "http://kdt-sw-6-team07.elicecoding.com",
    },
    {
      name: "일비",
      period: "2022.02 - 2022.09",
      project: "Team Project",
      role: "낙상 감지 기기 담당",
      techStack: ["Pyhton"],
      description:
        "카메라 기반의 낙상 감지 기기와 App을 통해 독거노인 낙상 사고에 대한 빠른 대처와 사고 예방에 도움을 줄 수 있는 낙상 감지 시스템입니다.",
      summary:
        "실시간 자세 추정 AI인 PoseNet으로 사람의 골격데이터를 추출하고, 이를 이용하여 낙상 여부를 판별하는 낙상 감지 알고리즘을 구현하였습니다. 라즈베리파이와 카메라를 통해 영상을 실시간으로 분석하고, 낙상을 감지했을 경우 보호자에게 알림을 보내는 앱을 제작하여 독거노인에게 낙상사고가 발생했을 시 빠르게 대처할 수 없었던 문제를 해결하고자 하였습니다.",
      meaning:
        "대학교 졸업작품으로 진행했던 이 프로젝트는 저에겐 처음으로 기획부터 개발까지 진행해본 프로젝트이자, AI를 활용한 첫 프로젝트였기 때문에 아직까지도 많이 기억에 남는 프로젝트입니다.\n\n프로젝트 진행 중 라즈베리파이4의 CPU에서 프로그램을 실행했을 때 속도가 예상보다 느린 문제가 있었습니다. 즉각적인 낙상 감지가 프로젝트의 핵심 부분이기에 Coral USB Accelerator를 사용하여 CPU대신 TPU로 프로그램을 실행하여 속도를 향상시켰습니다.\n\n카메라 한 대로 낙상 감지와 실시간 스트리밍이 동시에 처리되지 않는 이슈가 있었습니다. 이를 해결하기 위해 v4l2loopback을 이용해 가상 비디오 장치를 2개 생성하고, 카메라의 영상을 받아와 낙상 감지 프로그램과 실시간 스트리밍에 가상 비디오 장치를 적용하여 두 곳에서 동시 스트리밍이 가능하도록 구현하였습니다.",
      thumbnail: "ilbi/thumbnail.png",
      images: [
        "ilbi/landing.jpeg",
        "ilbi/signup.jpeg",
        "ilbi/main.jpeg",
        "ilbi/monitoring.jpeg",
        "ilbi/records.jpeg",
      ],
      github: "https://github.com/bokyung39/ilbi",
    },
    {
      name: "Nexus",
      period: "2024.12 - 2025.04",
      project: "Team Project",
      role: "풀스텍 담당",
      techStack: [
        "Next.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      description: "팀원들간의 효율적인 프로젝트 관리를 위한 협업 도구입니다.",
      summary:
        "팀원들간의 효율적인 프로젝트 관리를 위한 협업 도구입니다.\n실시간 채팅, 커뮤니티 및 프로젝트 진행 상태를 시각화하고, 협업 도구의 기능을 통합하여 프로젝트 관리에 대한 효율성을 높일 수 있는 플랫폼을 기획, 개발하였습니다.",
      meaning:
        "2명의 인원으로 프로젝트를 기획하고 프론트와 백엔드 개발, 배포까지 풀스택으로 진행한 프로젝트입니다.\n\nNext.js를 사용하여 프론트엔드 개발을 진행하면서 SSR의 장점을 경험했습니다. 또한 Docker를 이용한 컨테이너화로 개발 환경을 일관되게 유지하며 AWS EC2와 GitHub Actions을 통해 CI/CD 파이프라인을 구축하여 배포 자동화의 이점을 경험하였습니다.",
      thumbnail: "nexus/thumbnail.png",
      images: [
        "nexus/signup-login.png",
        "nexus/003.png",
        "nexus/004.png",
        "nexus/005.png",
        "nexus/006.png",
      ],
      github: "https://github.com/bokyung39/Nexus",
    },
    {
      name: "시워언해 (진행중)",
      period: "2024.11 ~",
      project: "개인 Project",
      role: "풀스텍 담당",
      techStack: ["React", "TypeScript", "Nest.js", "PostgreSQL", "Docker"],
      description:
        "서울의 모든 찜질방 정보들을 한 눈에 쉽게 비교하고 예약할 수 있는 서비스입니다.",
      summary:
        "서울의 모든 찜질방 정보들을 한 눈에 쉽게 비교하고 예약할 수 있는 서비스입니다.",
      meaning: "",
      thumbnail: "shiwonhae/thumbnail.png",
      images: ["shiwonhae/thumbnail.png"],
      github: "https://github.com/bokyung39/shiwonhae",
    },
  ],
};

export default portfolioData;
