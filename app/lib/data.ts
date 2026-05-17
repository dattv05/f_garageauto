export type ServiceIcon = "Droplet" | "Wrench" | "Battery" | "Settings" | "Car" | "Gauge";

export type Service = {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    icon: ServiceIcon;
    color: string;
    glow: string;
    price: string;
    duration: string;
    details: string[];
};

export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image: string;
};

// Services data with detailed information
export const servicesData: Service[] = [
    {
        id: 1,
        title: "Thay dầu động cơ",
        shortDescription: "Thay dầu nhớt chính hãng",
        description: "Thay dầu nhớt chính hãng, kiểm tra hệ thống bôi trơn toàn diện với tiêu chuẩn kỹ thuật cao nhất.",
        icon: "Droplet",
        color: "#06B6D4",
        glow: "rgba(6,182,212,0.4)",
        price: "250,000 VNĐ",
        duration: "30-45 phút",
        details: [
            "Sử dụng dầu nhớt chính hãng từ các hãng uy tín",
            "Kiểm tra hệ thống bôi trơn toàn bộ xe",
            "Rửa động cơ và thay lọc dầu mới",
            "Kiểm tra áp suất dầu sau khi thay",
            "Bảo hành dịch vụ 10,000km hoặc 1 tháng",
        ],
    },
    {
        id: 2,
        title: "Sửa chữa động cơ",
        shortDescription: "Chẩn đoán và sửa chữa động cơ",
        description: "Chẩn đoán và sửa chữa các vấn đề về động cơ với thiết bị hiện đại, chính xác đến từng chi tiết.",
        icon: "Wrench",
        color: "#7C3AED",
        glow: "rgba(124,58,237,0.4)",
        price: "Theo báo giá",
        duration: "Phụ thuộc vấn đề",
        details: [
            "Chẩn đoán lỗi bằng máy quét OBD-II",
            "Sửa chữa hệ thống xăng, ignition, transmission",
            "Thay thế phụ tùng nếu cần thiết",
            "Test lái và kiểm tra chất lượng",
            "Bảo hành 6 tháng cho các chi tiết thay thế",
        ],
    },
    {
        id: 3,
        title: "Hệ thống điện",
        shortDescription: "Kiểm tra và sửa chữa hệ thống điện",
        description: "Kiểm tra và sửa chữa hệ thống điện, ắc quy, máy phát — nhanh chóng và an toàn tuyệt đối.",
        icon: "Battery",
        color: "#EC4899",
        glow: "rgba(236,72,153,0.4)",
        price: "150,000 - 500,000 VNĐ",
        duration: "30-60 phút",
        details: [
            "Kiểm tra ắc quy và sức điện động",
            "Sửa chữa hệ thống charging",
            "Kiểm tra và sửa lỗi điện từ",
            "Thay thế dây cắm, relay, fuse",
            "Bảo hành 12 tháng cho ắc quy mới",
        ],
    },
    {
        id: 4,
        title: "Bảo dưỡng định kỳ",
        shortDescription: "Bảo dưỡng toàn diện và định kỳ",
        description: "Chương trình bảo dưỡng toàn diện theo hãng xe, gia hạn tuổi thọ và hiệu suất vận hành.",
        icon: "Settings",
        color: "#F97316",
        glow: "rgba(249,115,22,0.4)",
        price: "500,000 - 2,000,000 VNĐ",
        duration: "1-2 giờ",
        details: [
            "Bảo dưỡng theo schedule của hãng xe",
            "Kiểm tra toàn bộ các thành phần quan trọng",
            "Thay lọc không khí, lọc dầu, lọc xăng",
            "Kiểm tra và điều chỉnh hệ thống phanh",
            "Bảo hành dịch vụ 10,000km hoặc 1 tháng",
        ],
    },
    {
        id: 5,
        title: "Lốp xe & cân bằng",
        shortDescription: "Thay lốp, vá vỏ, cân bằng động",
        description: "Thay lốp, vá vỏ, cân bằng động — đảm bảo vận hành êm ái và an toàn trên mọi cung đường.",
        icon: "Car",
        color: "#06B6D4",
        glow: "rgba(6,182,212,0.4)",
        price: "200,000 - 800,000 VNĐ",
        duration: "45-60 phút",
        details: [
            "Thay lốp xe chính hãng đúng kích thước",
            "Vá vỏ xe chuyên nghiệp",
            "Cân bằng động mấy tay lái",
            "Căn chỉnh độ bánh xe",
            "Bảo hành lốp 12 tháng",
        ],
    },
    {
        id: 6,
        title: "Chẩn đoán vi tính",
        shortDescription: "Kiểm tra lỗi bằng máy chẩn đoán AI",
        description: "Kiểm tra lỗi bằng máy chẩn đoán chuyên dụng AI, reset lỗi ECU với độ chính xác 99.9%.",
        icon: "Gauge",
        color: "#7C3AED",
        glow: "rgba(124,58,237,0.4)",
        price: "50,000 - 200,000 VNĐ",
        duration: "15-30 phút",
        details: [
            "Quét toàn bộ hệ thống ECU của xe",
            "Xác định mã lỗi chính xác",
            "Cho lời khuyên sửa chữa",
            "Reset lỗi sau khi sửa xong",
            "Báo cáo chi tiết lỗi kỹ thuật",
        ],
    },
];

// Blog posts data
export const blogPostsData: BlogPost[] = [
    {
        id: 1,
        slug: "bao-duong-xe-oto-dung-cach",
        title: "Bảo Dưỡng Xe Ô Tô Đúng Cách",
        excerpt: "Hướng dẫn chi tiết cách bảo dưỡng xe ô tô đúng cách để kéo dài tuổi thọ",
        content: `
Bảo dưỡng xe ô tô là một công việc quan trọng không thể bỏ qua nếu bạn muốn giữ chiếc xe của mình ở tình trạng tốt nhất. Dưới đây là những bước cần thiết để bảo dưỡng xe ô tô đúng cách:

## 1. Thay Dầu Nhớt Định Kỳ
Dầu nhớt là "máu" của động cơ. Bạn cần thay dầu nhớt theo hướng dẫn của nhà sản xuất, thường là cứ 10,000km hoặc 6 tháng.

## 2. Kiểm Tra Lốp Xe
Lốp xe cần được kiểm tra thường xuyên về áp suất và độ mòn. Lốp xe bị mòn sẽ ảnh hưởng đến độ an toàn.

## 3. Kiểm Tra Hệ Thống Phanh
Hệ thống phanh là vô cùng quan trọng với an toàn lái xe. Kiểm tra pad phanh, đĩa phanh và chất lỏng phanh thường xuyên.

## 4. Kiểm Tra Pin Ắc Quy
Pin ắc quy cần được kiểm tra để đảm bảo xe khởi động tốt. Thay pin ắc quy mới khi cần thiết.

## 5. Làm Sạch Bộ Lọc
Bộ lọc không khí cần được làm sạch hoặc thay mới để đảm bảo động cơ hoạt động hiệu quả.

Tuân thủ những bước này sẽ giúp xe của bạn luôn hoạt động ở mức tối ưu.
    `,
        author: "Tran Van A",
        date: "2024-01-15",
        category: "Bảo dưỡng",
        image: "/blog-1.jpg",
    },
    {
        id: 2,
        slug: "nhieu-canh-bao-tren-bang-to-xe",
        title: "Những Cảnh Báo Trên Bảng Tờ Xe Bạn Cần Biết",
        excerpt: "Giải thích chi tiết ý nghĩa của các cảnh báo trên bảng tờ xe",
        content: `
Bảng tờ xe hiển thị nhiều cảnh báo quan trọng. Hãy hiểu rõ ý nghĩa của từng cảnh báo để xử lý kịp thời:

## Các Cảnh Báo Quan Trọng

### 1. Cảnh Báo Động Cơ
Đèn vàng có biểu tượng động cơ có nghĩa là có vấn đề với hệ thống động cơ. Bạn nên đến gara để kiểm tra.

### 2. Cảnh Báo Hệ Thống Phanh
Đèn đỏ hình tròn có nghĩa là chất lỏng phanh thấp hoặc có vấn đề với hệ thống phanh. Dừng ngay lập tức.

### 3. Cảnh Báo Tăng Áp
Đèn biểu tượng turbo có thể biểu thị vấn đề với hệ thống tăng áp của động cơ.

### 4. Cảnh Báo Pin Ắc Quy
Đèn biểu tượng pin có nghĩa là pin ắc quy không được sạc đúng hoặc cần thay mới.

Nếu bạn thấy bất kỳ cảnh báo nào, hãy đưa xe đến gara để kiểm tra ngay.
    `,
        author: "Nguyen Thi B",
        date: "2024-01-20",
        category: "Kiến thức",
        image: "/blog-2.jpg",
    },
    {
        id: 3,
        slug: "huong-dan-lap-rap-va-trang-bi-can-go",
        title: "Hướng Dẫn Lắp Ráp và Trang Bị Căn Góc Bánh Xe",
        excerpt: "Giải thích chi tiết về căn chỉnh độ bánh xe và tầm quan trọng của nó",
        content: `
Căn góc bánh xe (Alignment) là một phần quan trọng của bảo dưỡng xe. Một chiếc xe có căn góc bánh xe chính xác sẽ vận hành mượt mà hơn và an toàn hơn.

## Tại Sao Căn Góc Bánh Xe Quan Trọng?

### 1. Kéo Dài Tuổi Thọ Lốp
Khi bánh xe không được căn chỉnh đúng, lốp sẽ bị mòn không đều, dẫn đến phải thay lốp sớm hơn.

### 2. Cải Thiện Hiệu Suất Lái Xe
Xe sẽ dễ điều khiển hơn và không bị lệch sang một bên khi lái thẳng.

### 3. Tăng An Toàn
Bánh xe căn chỉnh tốt giúp xe phanh hiệu quả hơn và tăng độ ổn định khi vào cua.

## Khi Nào Nên Căn Góc Bánh Xe?

- Sau khi thay lốp mới
- Sau khi thay các bộ phận hệ thống treo
- Khi xe bị lệch sang một bên
- Cứ 6 tháng hoặc 10,000km nên kiểm tra lại

Hãy đến gara Garage Auto Hoàng Phát để kiểm tra và căn góc bánh xe chuyên nghiệp.
    `,
        author: "Tran Van A",
        date: "2024-01-25",
        category: "Bảo dưỡng",
        image: "/blog-3.jpg",
    },
    {
        id: 4,
        slug: "cach-phat-hien-va-sua-loi-pin-ac-quy",
        title: "Cách Phát Hiện và Sửa Lỗi Pin Ắc Quy",
        excerpt: "Hướng dẫn cách phát hiện sớm các vấn đề với pin ắc quy xe",
        content: `
Pin ắc quy là trái tim của hệ thống điện xe. Nếu pin ắc quy bị hỏng, xe không thể khởi động. Dưới đây là cách phát hiện và xử lý các vấn đề pin ắc quy:

## Các Dấu Hiệu Pin Ắc Quy Yếu

### 1. Xe Khó Khởi Động
Nếu xe mất nhiều thời gian để khởi động, đó có thể là dấu hiệu pin ắc quy yếu.

### 2. Đèn Trên Bảng Tờ Yếu
Nếu đèn trong xe trong lúc khởi động rất yếu, pin ắc quy cần được kiểm tra.

### 3. Mùi Lạ Từ Pin
Mùi rõ mò hay huỷ tích có thể biểu thị pin ắc quy bị hư hỏng.

## Cách Kiểm Tra Pin Ắc Quy

1. Kiểm tra mức acid trong pin
2. Kiểm tra điện áp của pin bằng voltmeter
3. Thực hiện load test để xem pin có đủ công suất không

## Khi Nào Cần Thay Pin Ắc Quy

Pin ắc quy thường có tuổi thọ từ 3-5 năm. Bạn nên thay mới khi:
- Tuổi pin trên 3 năm
- Pin không thể giữ điện tích
- Xe không khởi động được

Hãy đến gara Garage Auto Hoàng Phát để kiểm tra và thay pin ắc quy nếu cần.
    `,
        author: "Pham Van C",
        date: "2024-02-05",
        category: "Kiến thức",
        image: "/blog-4.jpg",
    },
];
