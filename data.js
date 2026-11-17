/* =========================================================
   Hải Châu — Kho dữ liệu cho các trang chi tiết
   Mở bằng: chitiet.html?id=<khoá>
   ========================================================= */
window.HC = { areas: {}, destinations: {}, festivals: {}, crafts: {}, foods: {} };

/* ---------- 1. VÙNG ĐẤT ---------- */
HC.areas["dien-kim"] = {
  kind: "Vùng đất",
  num: "01",
  title: "Diễn Kim",
  subtitle: "Cửa Lạch Vạn · làng chài &amp; tơ tằm",
  hero: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-ba-duc-5945.jpg",
  heroAlt: "Làng nghề tơ tằm Diễn Kim, xã Hải Châu",
  lead:
    "Diễn Kim là vùng đất ven biển phía Đông Bắc của xã Hải Châu, nơi con sông Bùng đổ ra biển qua cửa Lạch Vạn. Đây là địa bàn trọng điểm về hải sản, nuôi tôm công nghệ cao, làm muối và nghề tơ tằm lâu đời.",
  facts: [
    ["Diện tích", "6,6 km²"],
    ["Bờ biển", "gần 7 km"],
    ["Cửa biển", "Lạch Vạn"],
    ["Giáp biển", "Có"],
  ],
  body: [
    {
      h: "Vùng đất của cửa lạch và làng chài",
      p: [
        "Diễn Kim được thành lập năm 1969, gồm những xóm làng cổ như Hoàng Châu, Xuân Châu, Nam Liên, Bắc Liên, Kim Liên, Thái Thịnh, Tiền Tiến, Yên Thịnh, Đại Thành, Phú Thành. Phía Đông xã giáp Biển Đông với bờ biển dài gần 7 km.",
        "Điểm đặc biệt nhất của Diễn Kim là cửa biển Lạch Vạn — một trong sáu cửa lạch lớn của Nghệ An. Cửa lạch là nơi tàu thuyền ra vào, cũng là nơi hình thành những làng chài trù phú với nhà cửa, bến bãi nối liền.",
        "Diễn Kim có tới năm làng biển và khoảng 140 chiếc bè mảng công suất 24–35 CV. Mỗi sáng tinh mơ, bè mảng nối đuôi nhau ra khơi rồi trở về bờ khi trời vừa hửng, mang theo cá trích, ruốc, sứa, tôm tít, cá bầu, cá dớp.",
      ],
      img: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_31894220_232022.jpg",
      alt: "Bè mảng ngư dân Diễn Châu vào mùa cá trích",
      cap: "Bè mảng ra khơi từ 2 giờ sáng, về bờ khi trời hửng — nhịp sống quen thuộc của làng biển Diễn Kim.",
    },
    {
      h: "Kinh tế: biển, tôm và muối",
      p: [
        "Kinh tế Diễn Kim dựa vào khai thác hải sản vùng lộng và ven bờ, nuôi trồng thủy sản, làm muối và chế biến hải sản. Chỉ trong sáu tháng đầu năm 2024, cả xã khai thác khoảng 4.000 tấn hải sản các loại.",
        "Nuôi tôm công nghệ cao là hướng đi mới nổi bật. Vùng nuôi ở Diễn Kim và các xã lân cận rộng trên 160 ha, trong đó khoảng 70 ha áp dụng công nghệ cao với năng suất ước đạt 20 tấn/ha mỗi vụ.",
        "Bên cạnh đó là nghề làm muối truyền thống với hơn 40 ha và hàng trăm hộ diêm dân, cùng nghề chế biến nước mắm, mắm ruốc, nướng cá. Diễn Kim còn có khoảng 200 ha rừng ngập mặn và tuyến đê biển dài hơn 2 km che chắn cho làng xóm.",
      ],
      img: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_3_anh_le_thang7436264_1852018.jpeg",
      alt: "Diêm dân làm muối trên đồng muối Diễn Kim",
      cap: "Đồng muối Diễn Kim — nghề cũ đang mai một vì giá muối xuống thấp.",
    },
    {
      h: "Nghề tơ tằm và tín ngưỡng biển",
      p: [
        "Làng Tiền Tiến của Diễn Kim nổi tiếng với nghề trồng dâu nuôi tằm, ươm tơ dệt lụa hàng trăm năm. Đây từng là làng nghề lớn của Diễn Châu với hàng trăm hộ nuôi tằm và gần 50 máy dệt đũi.",
        "Về tín ngưỡng, Diễn Kim có Đền Trang ở xóm Xuân Châu thờ Tứ Dương Thành Quốc công Phạm Tử Nghi cùng Đông Hải Thái Thú Đại Ngư ông (tức Cá Ông). Đền lưu giữ 18 đạo sắc phong của triều Lê và triều Nguyễn, được công nhận Di tích Lịch sử – Văn hóa cấp tỉnh năm 2020.",
        "Người Diễn Kim còn nổi tiếng với những ngôi nhà xây bằng sò mỏ — loại vỏ sò lớn, cứng, gắn kết bằng vôi tạo nên tường nhà bền chắc, mát về mùa hè. Đây là nét kiến trúc dân gian độc đáo của vùng biển Diễn Châu.",
      ],
      img: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/den-Trang-.jpg",
      alt: "Đền Trang ở xóm Xuân Châu, Diễn Kim",
      cap: "Đền Trang — ngôi đền hơn 250 năm tuổi, nơi thờ võ tướng và Cá Ông của cư dân Kim Lũy xưa.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-ba-thu-7148.jpg", alt: "Nông dân hái dâu nuôi tằm ở Diễn Kim", cap: "Hái dâu nuôi tằm" },
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-tam-an-5741.jpg", alt: "Tằm đang ăn lá dâu", cap: "Tằm ăn dâu" },
    { src: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_74016314_232022.jpg", alt: "Cá trích tươi vừa đánh bắt", cap: "Cá trích vừa lên bãi" },
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_10_anh_le_thang1864264_1852018.jpeg", alt: "Đồng muối Diễn Kim", cap: "Đồng muối" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-7.webp", alt: "Bờ biển Diễn Châu", cap: "Bờ biển" },
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-to-3486.jpg", alt: "Tơ sợi thành phẩm của làng nghề Diễn Kim", cap: "Tơ sợi thành phẩm" },
  ],
  sources: [
    { label: "Tạp chí Sông Lam — Đền Trang", url: "https://www.tapchisonglam.vn/den-trang-ngoi-den-o-vung-van-hoa-bien-dien-kim/" },
    { label: "Báo Nghệ An — Làng quê xứ Nghệ nô nức bán sản phẩm từ con tằm", url: "https://baonghean.vn/lang-que-xu-nghe-no-du-nho-ban-san-pham-tu-con-tam-10263693.html" },
    { label: "Sở KH&CN Nghệ An — Nuôi tôm công nghệ cao", url: "https://ngheandost.gov.vn/nong-nghiep/dien-chau-hieu-qua-kinh-te-tu-mo-hinh-nuoi-tom-cong-nghe-cao-6894.html" },
    { label: "Wikipedia — Hải Châu (xã)", url: "https://vi.wikipedia.org/wiki/H%E1%BA%A3i_Ch%C3%A2u_(x%C3%A3)" },
  ],
  related: ["nuoi-tam-dien-kim", "lam-muoi", "den-trang", "cua-lach-van"],
};

HC.areas["dien-hung"] = {
  kind: "Vùng đất",
  num: "02",
  title: "Diễn Hùng",
  subtitle: "Hùng Nghĩa · Hùng Phong · Ngọc Mỹ — đất hươu nhung",
  hero: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai2_20230610181026.jpg",
  heroAlt: "Mô hình nuôi hươu lấy nhung ở Diễn Hùng",
  lead:
    "Diễn Hùng là vùng đất ven biển phía Bắc của xã Hải Châu, giáp Quỳnh Lưu. Nơi đây nổi tiếng với nghề nuôi hươu lấy nhung — hướng làm giàu độc đáo của cư dân vùng cát.",
  facts: [
    ["Diện tích", "5,19 km²"],
    ["Giáp biển", "Có (Đông giáp Biển Đông)"],
    ["Thôn cũ", "Hùng Nghĩa · Hùng Phong · Ngọc Mỹ"],
    ["Đặc sản", "Nhung hươu"],
  ],
  body: [
    {
      h: "Vùng cát ven biển phía Bắc",
      p: [
        "Diễn Hùng được thành lập năm 1969, phía Đông giáp Biển Đông, phía Bắc giáp xã Quỳnh Thọ (huyện Quỳnh Lưu), phía Nam giáp Diễn Hải, phía Tây giáp Diễn Hoàng và Diễn Mỹ. Xã gồm các thôn Hùng Nghĩa, Hùng Phong, Ngọc Mỹ.",
        "Với diện tích tự nhiên 5,19 km², trong đó hơn 385 ha là đất nông nghiệp, Diễn Hùng có dải rừng phi lao phòng hộ rộng khoảng 50 ha chạy dọc bờ biển, vừa chắn cát vừa tạo cảnh quan xanh mát.",
        "Tuyến đường ven biển đi qua đây mở ra thuận lợi cho giao thương và phát triển du lịch, kết nối Diễn Hùng với các vùng biển lân cận.",
      ],
      img: "https://sinhthainongnghiep.net.vn/uploads/2024/06/mo-hinh-nuoi-huou-lay-nhung-1-1024x681.jpg",
      alt: "Mô hình nuôi hươu lấy nhung ở xã Diễn Hùng",
      cap: "Trang trại nuôi hươu lấy nhung — nghề làm giàu của nông dân Diễn Hùng.",
    },
    {
      h: "Nghề nuôi hươu lấy nhung",
      p: [
        "Từ thập niên 1980, người Diễn Hùng đã đưa hươu về nuôi lấy nhung. Đến nay toàn xã có khoảng 1.678 con hươu với 184 hộ chăn nuôi, biến nơi đây thành một trong những vùng nuôi hươu lớn nhất Nghệ An.",
        "Mỗi cặp nhung hươu cho thu hoạch 1,5–2 kg, bán với giá cao, mang lại thu nhập 250–300 triệu đồng mỗi năm cho nhiều hộ gia đình. Nhung hươu Diễn Hùng được xem là sản vật quý, dùng làm thuốc bổ và quà biếu.",
        "Nghề nuôi hươu phù hợp với vùng đất cát ven biển, tận dụng được nguồn thức ăn từ lá cây, cỏ và phụ phẩm nông nghiệp, đồng thời tạo việc làm cho lao động địa phương.",
      ],
      img: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai4_20230610181026.jpg",
      alt: "Đàn hươu của nông dân Diễn Hùng",
      cap: "Đàn hươu cho nhung — nguồn thu ổn định của nhiều hộ ở Diễn Hùng.",
    },
    {
      h: "Truyền thống và ký ức",
      p: [
        "Diễn Hùng có truyền thống yêu nước và cách mạng. Ngày 15/3/1965, dân quân Hợp tác xã Trần Phú đã dùng bốn khẩu súng K44 bắn rơi một máy bay phản lực của Mỹ — chiến công được ghi nhớ trong lịch sử địa phương.",
        "Người dân nơi đây sống chủ yếu bằng nông nghiệp ven biển và chăn nuôi, gắn bó với ruộng đồng, bãi cát và rừng phi lao. Đời sống văn hóa cộng đồng vẫn giữ nhiều nét truyền thống của cư dân miền biển Diễn Châu.",
      ],
    },
  ],
  gallery: [
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai1_20230610181026.jpg", alt: "Hươu nuôi ở Diễn Hùng", cap: "Hươu nuôi" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai3_20230610181026.jpg", alt: "Chăm sóc hươu", cap: "Chăm sóc đàn hươu" },
    { src: "https://sinhthainongnghiep.net.vn/uploads/2024/06/mo-hinh-nuoi-huou-lay-nhung-2-1024x768.jpg", alt: "Trang trại hươu", cap: "Trang trại hươu" },
    { src: "https://sinhthainongnghiep.net.vn/uploads/2024/06/mo-hinh-nuoi-huou-lay-nhung-3-1024x609.jpg", alt: "Nhung hươu", cap: "Nhung hươu" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-9.webp", alt: "Bờ biển Diễn Châu", cap: "Bờ biển" },
  ],
  sources: [
    { label: "Truyền hình Nghệ An — Nông dân Diễn Hùng giàu lên nhờ nghề nuôi hươu", url: "https://truyenhinhnghean.vn/kinh-te/202306/nong-dan-dien-hung-giau-len-nho-nghe-nuoi-huou-f130ab2" },
    { label: "Sinh thái Nông nghiệp — Xã Diễn Hùng làm giàu từ nghề nuôi hươu lấy nhung", url: "https://sinhthainongnghiep.net.vn/xa-dien-hung-lam-giau-tu-nghe-nuoi-huou-lay-nhung-a29970.html" },
    { label: "Wikipedia — Hùng Hải (xã cũ)", url: "https://vi.wikipedia.org/wiki/H%C3%B9ng_H%E1%BA%A3i" },
  ],
  related: ["nuoi-huou", "kenh-nha-le", "dien-hai"],
};

HC.areas["dien-hai"] = {
  kind: "Vùng đất",
  num: "03",
  title: "Diễn Hải",
  subtitle: "Bãi biển Hòn Câu — “thiên đường” tắm biển",
  hero: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-2.webp",
  heroAlt: "Bãi biển Hòn Câu, Diễn Hải",
  lead:
    "Diễn Hải là vùng đất ven biển phía Đông của xã Hải Châu, nổi tiếng nhất với bãi biển Hòn Câu — bãi tắm thoải, cát mịn, một thời là điểm du lịch biển đông khách bậc nhất của huyện Diễn Châu.",
  facts: [
    ["Diện tích", "5,04 km²"],
    ["Giáp biển", "Có"],
    ["Bãi biển", "Hòn Câu · dài ~2 km"],
    ["Khu du lịch", "35 ha"],
  ],
  body: [
    {
      h: "Bãi biển Hòn Câu",
      p: [
        "Diễn Hải nằm ở phía Đông của xã Hải Châu, tiếp giáp Biển Đông. Bãi biển Hòn Câu có chiều dài khoảng 2 km với cát mịn, sóng nhẹ, bãi thoải — điều kiện lý tưởng cho tắm biển và nghỉ dưỡng.",
        "Khu du lịch bãi tắm Hòn Câu rộng 35 ha, từng có hệ thống nhà nghỉ, ki-ốt và dịch vụ phục vụ du khách. Tuyến đường ven biển dài hơn 3 km chạy qua đây, mở ra tầm nhìn bao quát ra biển khơi.",
        "Ngoài bãi tắm, Diễn Hải còn có đảo Hòn Câu — khối núi đá vôi nhô lên giữa vùng biển, tạo nên khung cảnh thơ mộng và là điểm ngắm cảnh được nhiều người yêu thích.",
      ],
      img: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-4.webp",
      alt: "Bãi cát và sóng biển Hòn Câu",
      cap: "Bãi biển Hòn Câu — cát mịn, sóng êm, kéo dài gần 2 km.",
    },
    {
      h: "Đời sống làng biển",
      p: [
        "Cư dân Diễn Hải sống bằng nghề đánh bắt hải sản gần bờ và nuôi trồng thủy sản. Số liệu năm 2015 cho thấy sản lượng lương thực của xã đạt 4.664,2 tấn, sản lượng thủy sản đạt 2.681 tấn.",
        "Bè mảng và thuyền nhỏ ra khơi từ sáng sớm, mang về cá trích, ruốc, sứa, tôm tít… Hải sản tươi được bán ngay trên bãi biển, tạo nên phiên chợ cá nhộn nhịp mỗi buổi sớm.",
        "Kênh Nhà Lê (đoạn sông Me) chảy qua địa bàn, vừa là dấu tích lịch sử ngàn năm, vừa gắn với sinh hoạt sông nước của người dân.",
      ],
      img: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_61643229_232022.jpg",
      alt: "Ngư dân và hải sản vừa đánh bắt",
      cap: "Hải sản tươi bán ngay trên bãi sau mỗi chuyến bè mảng về bờ.",
    },
  ],
  gallery: [
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-1.webp", alt: "Bãi biển Hòn Câu", cap: "Bãi biển Hòn Câu" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-3.webp", alt: "Bờ biển Hòn Câu", cap: "Bờ biển" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-5.webp", alt: "Sóng biển Hòn Câu", cap: "Sóng biển" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-8.webp", alt: "Bãi cát Hòn Câu", cap: "Bãi cát" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-10.webp", alt: "Biển Hòn Câu", cap: "Biển Hòn Câu" },
  ],
  sources: [
    { label: "Toplist Nghệ An — Biển Diễn Hải", url: "https://toplistnghean.vn/du-lich/bien-dien-hai" },
    { label: "Cổng TTĐT huyện Diễn Châu — Sôi động đầu mùa du lịch biển", url: "https://dienchau.nghean.gov.vn/van-hoa-xa-hoi/soi-dong-dau-mua-du-lich-bien-dien-chau-565715" },
    { label: "Wikipedia — Hùng Hải (xã cũ)", url: "https://vi.wikipedia.org/wiki/H%C3%B9ng_H%E1%BA%A3i" },
  ],
  related: ["hon-cau-bai-bien", "hon-cau-dao", "cua-lach-van", "dien-hung"],
};


HC.areas["dien-my"] = {
  kind: "Vùng đất",
  num: "04",
  title: "Diễn Mỹ",
  subtitle: "Làng Đông Xương · Phú Thọ — đất tuồng &amp; khoa bảng",
  hero: "https://bna.1cdn.vn/2015/08/19/uploaded-dataimages-201508-original-_images1371841_ti_p_a7__thu_ho_ch_l_c___di_n_m_.jpg",
  heroAlt: "Thu hoạch lạc ở Diễn Mỹ",
  lead:
    "Diễn Mỹ là vùng đất nội đồng phía Tây Nam của xã Hải Châu. Đây là miền quê thuần nông, giàu truyền thống khoa bảng, nổi tiếng với hát tuồng và các làng nghề thủ công lâu đời.",
  facts: [
    ["Diện tích", "4,9 km²"],
    ["Giáp biển", "Không"],
    ["Làng cũ", "Đông Xương · Phú Thọ · Vạn Thọ…"],
    ["Đặc sản", "Lạc · vừng"],
  ],
  body: [
    {
      h: "Miền quê thuần nông",
      p: [
        "Diễn Mỹ được thành lập năm 1969, gồm các làng Vạn Thọ, Phúc Thọ, Kim Thịnh, Đông Tiến, Lập Thành, Đông Thượng, Mỹ Lộc, Sào Nam. Khác với các vùng ven biển, Diễn Mỹ là xã nội đồng, không giáp biển.",
        "Đất đai nơi đây phù hợp với cây lạc (đậu phộng), vừng (mè), ngô và khoai. Mùa thu hoạch, cả cánh đồng vàng óng, tạo nên khung cảnh đồng quê yên bình đặc trưng của vùng Diễn Châu.",
        "Diễn Mỹ còn giữ nghề mộc truyền thống và nghề đóng cối xay của làng Đông Xương xưa — những nghề thủ công gắn với nhịp sống nông nghiệp của cư dân.",
      ],
      img: "https://bna.1cdn.vn/2015/08/19/uploaded-dataimages-201508-original-_images1371839_a7_m_t_g_c_khu_n_vi_n_tr__s__x__di_n_m__lu_n_du_c_trang_tr__d_p.jpg",
      alt: "Khuôn viên trụ sở xã Diễn Mỹ",
      cap: "Một góc xã Diễn Mỹ — miền quê nội đồng của Hải Châu.",
    },
    {
      h: "Đất hát tuồng",
      p: [
        "Diễn Mỹ là một trong những cái nôi hát tuồng của Diễn Châu. Làng Phú Thọ nổi tiếng với câu “Tuồng Mái Nâu nổi tiếng khắp vùng gần xa”. Vào tối mùng 3 Tết, dân làng lại râm ran kéo nhau đi xem tuồng, sân nhà văn hóa xã chật kín người.",
        "Câu lạc bộ tuồng xã Diễn Mỹ do cụ Hoàng Ngọc Phác làm chủ nhiệm, gìn giữ hàng chục vở tuồng cổ. Các vở thường diễn như “Ngọn lửa Hồng Sơn”, “Trưng Vương đề cờ”, “Mỵ Châu – Trọng Thủy”…",
        "Hát tuồng không chỉ là thú vui mà còn là cách người dân lưu giữ lịch sử, đạo lý và tinh thần cộng đồng qua nhiều thế hệ.",
      ],
      img: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201602-original-_images1466367_tuong_dien_chau.jpg",
      alt: "Biểu diễn hát tuồng ở Diễn Châu",
      cap: "Hát tuồng — món ăn tinh thần không thể thiếu mỗi dịp Tết ở Diễn Mỹ.",
    },
    {
      h: "Dòng họ và di tích",
      p: [
        "Diễn Mỹ có Nhà thờ họ Vũ đại tôn ở xóm Đông Mỹ, khởi dựng từ năm Canh Ngọ 1510, thờ Tham đốc Dũng Nghĩa hầu Đại tướng quân Vũ Trung Lương. Công trình được công nhận Di tích lịch sử cấp tỉnh năm 2013.",
        "Nhà thờ còn lưu giữ ngai thờ, bài vị, bản gia phả chữ Hán thời Tự Đức và sắc phong vua Khải Định — những báu vật tinh thần của làng Đông Xương xưa.",
        "Truyền thống khoa bảng và hiếu học của vùng đất này được các dòng họ như Vũ, Nguyễn gìn giữ qua nhiều đời, góp phần làm nên diện mạo văn hóa của Diễn Mỹ hôm nay.",
      ],
      img: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/z7044126104528_eca5fbd09ea3ff07bb414cd844d59fa3-724342.jpg",
      alt: "Nhà thờ họ Vũ đại tôn ở xóm Đông Mỹ",
      cap: "Nhà thờ họ Vũ đại tôn — di tích lịch sử cấp tỉnh, hơn 500 năm tuổi.",
    },
  ],
  gallery: [
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/anh-3-1694139917-892082.jpg", alt: "Sắc phong tại nhà thờ họ Vũ", cap: "Sắc phong cổ" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/anh2-1694139874-782693.jpg", alt: "Không gian thờ tự họ Vũ", cap: "Không gian thờ tự" },
    { src: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201503-original-_images1143701_tuong_4.jpg", alt: "Diễn viên hát tuồng", cap: "Diễn viên tuồng" },
    { src: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201503-original-_images1143702_tuong_5.jpg", alt: "Biểu diễn tuồng", cap: "Biểu diễn tuồng" },
  ],
  sources: [
    { label: "Cổng TTĐT xã Hải Châu — Di tích Nhà thờ họ Vũ đại tôn", url: "https://haichau.nghean.gov.vn/trang-chu/di-tich-nha-tho-ho-vu-dai-ton-xom-dong-my-xa-hai-chau-bau-vat-tinh-than-cua-lang-dong-xuong-xua-974890?pageindex=0" },
    { label: "Báo Nghệ An — Âm vang trống tuồng Phủ Diễn", url: "https://baonghean.vn/am-vang-trong-tuong-phu-dien-10024536.html" },
    { label: "Wikipedia — Diễn Châu (huyện)", url: "https://vi.wikipedia.org/wiki/Di%E1%BB%85n_Ch%C3%A2u_(huy%E1%BB%87n)" },
  ],
  related: ["hat-tuong", "nghe-moc-dien-my", "nha-tho-ho-vu"],
};

HC.areas["dien-hoang"] = {
  kind: "Vùng đất",
  num: "05",
  title: "Diễn Hoàng",
  subtitle: "Hoàng Hà · Hoàng La — làng trống &amp; đền Tám Mái",
  hero: "https://bna.1cdn.vn/2025/01/16/bna_-trong-dep.-anh-phu-huong.jpg",
  heroAlt: "Trống da làng Hoàng Hà, Diễn Hoàng",
  lead:
    "Diễn Hoàng là vùng đất nội đồng phía Tây Bắc của xã Hải Châu, nổi tiếng nhờ làng nghề làm trống da Hoàng Hà hàng trăm năm tuổi và ngôi đình Tám Mái có kiến trúc độc đáo bậc nhất Diễn Châu.",
  facts: [
    ["Diện tích", "6,7 km²"],
    ["Giáp biển", "Không"],
    ["Làng cũ", "Hoàng Hà · Hoàng La · Phú Yên"],
    ["Đặc sản", "Trống da"],
  ],
  body: [
    {
      h: "Làng trống da Hoàng Hà",
      p: [
        "Diễn Hoàng được thành lập năm 1969, gồm các làng Hoàng Hà, Hoàng La, Phú Yên và vùng Sào Nam. Đây là vùng đất nội đồng, không giáp biển, dân cư sống bằng nông nghiệp và các nghề thủ công.",
        "Nổi tiếng nhất là làng nghề làm trống da Hoàng Hà với tuổi đời khoảng 200 năm. Nghề được các nghệ nhân dòng họ Nguyễn mang từ miền Bắc vào, truyền nối qua 16 đời. Thời thịnh, cả làng có trên 40 hộ làm trống; nay còn khoảng 14 hộ với hàng chục nghệ nhân.",
        "Trống Hoàng Hà có hơn 10 loại như trống sấm, trống trầu, trống đình, trống trường học, trống lân, trống chiến, trống lệnh, trống cơm… Tiếng trống vang rền, bền, được khách khắp nơi tìm mua mỗi dịp Tết và lễ hội.",
      ],
      img: "https://bna.1cdn.vn/2025/01/16/bna_-do-chi-tiet.-anh-phu-huong.jpg",
      alt: "Chi tiết trống da Hoàng Hà",
      cap: "Trống da Hoàng Hà — sản phẩm của làng nghề hơn 200 năm tuổi.",
    },
    {
      h: "Đình Tám Mái và tín ngưỡng",
      p: [
        "Đình Tám Mái ở xóm Thanh Nam, làng Hoàng Hà, được xây dựng khoảng năm 1896. Đình có kiến trúc tam tòa, hai hồi, cổ lầu, tám mái — nét kiến trúc và nghệ thuật điêu khắc gỗ độc đáo hiếm có của Diễn Châu.",
        "Đình thờ Bạch Y Công chúa (Hồ Thị Phương Dung) — vị thần theo truyền thuyết giúp Lê Lợi thoát nạn khi bị giặc Minh truy sát — cùng Thành hoàng làng Hoàng Hà. Đình được công nhận Di tích Lịch sử – Văn hóa cấp tỉnh năm 2008.",
        "Làng Hoàng La còn có Đền Bà Quận thờ Quận chúa Nguyễn Thị Ngọc Oanh, người có công chiêu dân lập ấp, cùng Nhà thờ họ Nguyễn — di tích lịch sử – văn hóa cấp tỉnh.",
      ],
      img: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-1-5523.jpg",
      alt: "Đình Tám Mái ở làng Hoàng Hà",
      cap: "Đình Tám Mái — công trình kiến trúc cổ với tám mái và chạm khắc tinh xảo.",
    },
    {
      h: "Nghề phụ và hát tuồng",
      p: [
        "Bên cạnh nghề trống, làng Hoàng La còn có nghề bện võng truyền thống. Người dân tận dụng thời gian nông nhàn để đan võng, tạo thêm thu nhập cho gia đình.",
        "Diễn Hoàng cũng là một trong những vùng giữ được phong trào hát tuồng. Đội tuồng của xã được thành lập năm 2004, đến nay có hơn 20 thành viên, thường biểu diễn phục vụ nhân dân trong các dịp lễ, Tết.",
        "Những giá trị văn hóa ấy — tiếng trống, câu tuồng, mái đình cổ — làm nên bản sắc riêng của Diễn Hoàng trong lòng xã Hải Châu hôm nay.",
      ],
      img: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-9-1-7760.jpg",
      alt: "Chạm khắc gỗ trong đình Tám Mái",
      cap: "Nghệ thuật chạm khắc gỗ tinh xảo trong đình Tám Mái.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-1.-anh-phu-huong.jpg", alt: "Trống Hoàng Hà", cap: "Trống Hoàng Hà" },
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-da.-anh-phu-huong.jpg", alt: "Da làm mặt trống", cap: "Da làm mặt trống" },
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-trong-nha-ong-nguyen-dinh-cat-luon-co-san-trong-dap-ung-nhu-cau-khach-mua.-anh-phu-huong.jpg", alt: "Nhà nghệ nhân Nguyễn Đình Cát", cap: "Nhà nghệ nhân Nguyễn Đình Cát" },
    { src: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-3-7536.jpg", alt: "Hạ đình Tám Mái", cap: "Hạ đình Tám Mái" },
    { src: "https://bna.1cdn.vn/2019/12/07/uploaded-thuhuyenbna-2019_12_07-_bna_anhmaigiang118404449_7122019.jpg", alt: "Bện võng ở Hoàng La", cap: "Bện võng Hoàng La" },
  ],
  sources: [
    { label: "Báo Nghệ An — Hối hả làng trống Hoàng Hà dịp cuối năm", url: "https://baonghean.vn/hoi-ha-lang-trong-hoang-ha-dip-cuoi-nam-10289589.html" },
    { label: "Sức khỏe & Đời sống — Vang mãi tiếng trống Hoàng Hà", url: "https://suckhoedoisong.vn/vang-mai-tieng-trong-hoang-ha-169250112212710554.htm" },
    { label: "Báo Nghệ An — Độc đáo nghệ thuật kiến trúc, điêu khắc đình Tám Mái", url: "https://baonghean.vn/doc-dao-nghe-thuat-kien-truc-dieu-khac-dinh-tam-mai-10243330.html" },
  ],
  related: ["trong-hoang-ha", "ben-vong", "den-tam-mai", "hat-tuong"],
};

/* ---------- 2. ĐIỂM ĐẾN ---------- */
HC.destinations["hon-cau-bai-bien"] = {
  kind: "Điểm đến",
  num: "01",
  title: "Bãi biển Hòn Câu",
  subtitle: "Cát mịn, sóng êm — bãi tắm của duyên hải Hải Châu",
  hero: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-1.webp",
  heroAlt: "Bãi biển Hòn Câu, xã Diễn Hải",
  lead:
    "Bãi biển Hòn Câu thuộc địa bàn Diễn Hải cũ, dài gần 2 km với cát mịn, sóng nhẹ và bãi thoải. Đây từng là khu du lịch biển đông khách bậc nhất của huyện Diễn Châu và vẫn là điểm tắm biển hấp dẫn của xã Hải Châu.",
  facts: [
    ["Vị trí", "Diễn Hải, xã Hải Châu"],
    ["Chiều dài", "gần 2 km"],
    ["Khu du lịch", "35 ha"],
    ["Đặc điểm", "Cát mịn · sóng êm"],
  ],
  body: [
    {
      h: "Vì sao gọi là Hòn Câu",
      p: [
        "Tên gọi Hòn Câu gắn với khối đá — đảo nhỏ nhô lên ngoài khơi, nơi có hình dáng tựa như con chim câu đậu trên mặt biển. Người dân địa phương lấy đó đặt tên cho cả vùng biển và bãi tắm.",
        "Bãi biển nằm ở phía Đông của xã Hải Châu, được che chắn tự nhiên nên sóng nhỏ, nước trong. Cát ở đây mịn, đi chân trần rất êm — một trong những lý do khiến Hòn Câu được du khách yêu thích.",
      ],
      img: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-3.webp",
      alt: "Bờ biển Hòn Câu nhìn ra khơi",
      cap: "Bãi biển thoải, nước trong, phù hợp tắm và nghỉ dưỡng.",
    },
    {
      h: "Trải nghiệm ở bãi biển",
      p: [
        "Vào mùa hè, du khách có thể tắm biển, đắp cát, ngắm bình minh và chờ những chiếc bè mảng cập bờ. Phiên chợ cá buổi sớm ngay trên bãi là trải nghiệm thú vị: hải sản tươi rói, bán ngay khi còn ướt nước biển.",
        "Khu du lịch bãi tắm Hòn Câu rộng 35 ha từng có hệ thống nhà nghỉ, ki-ốt và dịch vụ ăn uống. Tuyến đường ven biển chạy qua đây giúp việc di chuyển thuận tiện, mở ra tầm nhìn bao quát ra biển khơi.",
        "Đây cũng là nơi lý tưởng để tổ chức dã ngoại, cắm trại nhẹ và chụp ảnh hoàng hôn — khi mặt trời lặn sau rặng phi lao, cả vùng biển chuyển sang màu vàng cam rực rỡ.",
      ],
      img: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-6.webp",
      alt: "Khung cảnh bãi biển Hòn Câu",
      cap: "Mùa hè, bãi biển đông người tắm và vui chơi.",
    },
  ],
  gallery: [
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-2.webp", alt: "Bãi biển Hòn Câu", cap: "Bãi biển Hòn Câu" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-5.webp", alt: "Sóng biển Hòn Câu", cap: "Sóng biển" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-8.webp", alt: "Bãi cát Hòn Câu", cap: "Bãi cát" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-9.webp", alt: "Bờ biển Hòn Câu", cap: "Bờ biển" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-10.webp", alt: "Biển Hòn Câu", cap: "Biển Hòn Câu" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-4.webp", alt: "Bãi tắm Hòn Câu", cap: "Bãi tắm" },
  ],
  sources: [
    { label: "Toplist Nghệ An — Biển Diễn Hải", url: "https://toplistnghean.vn/du-lich/bien-dien-hai" },
    { label: "Cổng TTĐT huyện Diễn Châu", url: "https://dienchau.nghean.gov.vn/van-hoa-xa-hoi/soi-dong-dau-mua-du-lich-bien-dien-chau-565715" },
  ],
  related: ["hon-cau-dao", "dien-hai", "cua-lach-van", "be-mang-ca-trich"],
};

HC.destinations["hon-cau-dao"] = {
  kind: "Điểm đến",
  num: "02",
  title: "Đảo Hòn Câu",
  subtitle: "Khối đá vôi thơ mộng giữa biển khơi",
  hero: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-7.webp",
  heroAlt: "Đảo Hòn Câu nhìn từ bờ biển Diễn Hải",
  lead:
    "Hòn Câu là khối núi đá vôi nhô lên giữa vùng biển Diễn Hải, cách bờ không xa. Vẻ đẹp hoang sơ, nước xanh và những rạn đá là điểm nhấn được ví là nơi thơ mộng của duyên hải Hải Châu.",
  facts: [
    ["Vị trí", "Ngoài khơi Diễn Hải"],
    ["Loại địa hình", "Núi đá vôi"],
    ["Cảnh quan", "Biển · rạn đá"],
  ],
  body: [
    {
      h: "Vẻ đẹp hoang sơ",
      p: [
        "Từ bãi biển Hòn Câu nhìn ra khơi, đảo Hòn Câu hiện lên như một ốc đảo đá giữa màu xanh của biển. Quanh đảo là những rạn đá ngầm, nơi sinh sống của nhiều loài hải sản như ốc, cua, cá nhỏ.",
        "Ngư dân trong vùng thường ví Hòn Câu là “hòn ngọc” của Diễn Châu bởi sự kết hợp giữa biển, đá và trời. Khi thủy triều xuống, các bãi đá lộ ra, tạo thành những “con đường” đá nối liền bờ với đảo nhỏ.",
      ],
      img: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-6.webp",
      alt: "Rạn đá và biển quanh Hòn Câu",
      cap: "Rạn đá quanh Hòn Câu là nơi trú ngụ của nhiều loài hải sản.",
    },
    {
      h: "Gắn với nghề biển",
      p: [
        "Vùng biển quanh Hòn Câu là ngư trường quen thuộc của bè mảng và thuyền nhỏ. Ngư dân đánh bắt cá trích, ruốc, sứa, tôm tít — những loài hải sản đặc trưng của vùng biển Diễn Châu.",
        "Hòn Câu cũng là điểm ngắm cảnh được du khách yêu thích. Vào những ngày biển lặng, du khách có thể thuê thuyền ra gần đảo để ngắm toàn cảnh bờ biển Hải Châu từ phía ngoài khơi.",
      ],
    },
  ],
  gallery: [
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-8.webp", alt: "Biển Hòn Câu", cap: "Biển Hòn Câu" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-3.webp", alt: "Bờ biển Hòn Câu", cap: "Bờ biển" },
    { src: "https://toplistnghean.vn/storage/media/2026/03/bien-dien-hai-toplistnghean-5.webp", alt: "Sóng biển", cap: "Sóng biển" },
  ],
  sources: [
    { label: "Toplist Nghệ An — Biển Diễn Hải", url: "https://toplistnghean.vn/du-lich/bien-dien-hai" },
  ],
  related: ["hon-cau-bai-bien", "dien-hai"],
};

HC.destinations["kenh-nha-le"] = {
  kind: "Điểm đến",
  num: "03",
  title: "Kênh Nhà Lê &amp; sông Me",
  subtitle: "Dấu tích tuyến kênh đào ngàn năm tuổi",
  hero: "https://thegioidisan.vn/assets/media/2016/Thang%208/kenhnhaledonnhanbangditichquocgia.jpg",
  heroAlt: "Kênh Nhà Lê — đoạn kênh đào cổ ở Nghệ An",
  lead:
    "Kênh Nhà Lê là hệ thống kênh đào cổ, khởi công từ năm 983 thời Tiền Lê. Đoạn qua Nghệ An dài 128 km; tại Diễn Châu, nhánh kênh Mi đi qua địa bàn các xã cũ nay thuộc Hải Châu.",
  facts: [
    ["Khởi công", "Năm 983 (thời Tiền Lê)"],
    ["Đoạn qua Nghệ An", "128 km"],
    ["Xếp hạng", "Di tích lịch sử cấp quốc gia"],
  ],
  body: [
    {
      h: "Con kênh đào ngàn năm",
      p: [
        "Kênh Nhà Lê được khởi công từ năm 983 dưới thời Tiền Lê, là một trong những công trình thủy lợi – giao thông lớn nhất của người Việt xưa. Kênh vừa phục vụ giao thông, vừa là trục tiêu nước và phân lũ cho vùng đồng bằng.",
        "Đoạn kênh qua Nghệ An dài 128 km. Tại Diễn Châu, nhánh kênh Mi bắt đầu từ cửa Thai (Quỳnh Lưu), tiếp giáp vùng Diễn Hùng rồi chảy qua nhiều xã trước khi hòa vào hệ thống sông ngòi địa phương.",
        "Ngày nay, dấu tích kênh Nhà Lê còn được nhận ra qua đoạn sông Me chảy qua địa bàn Hải Châu, gắn với sinh hoạt sông nước và ký ức lịch sử của người dân.",
      ],
      img: "https://thegioidisan.vn/assets/media/2016/Thang%208/kenhnhaledonnhanbangditichquocgia.jpg",
      alt: "Đoạn kênh Nhà Lê còn lại",
      cap: "Kênh Nhà Lê — di tích lịch sử cấp quốc gia.",
    },
    {
      h: "Giá trị lịch sử và văn hóa",
      p: [
        "Kênh Nhà Lê không chỉ là công trình thủy lợi mà còn là chứng tích của quá trình khai phá, định cư và phát triển nông nghiệp ở đồng bằng ven biển Bắc Trung Bộ.",
        "Ngày nay, tuyến kênh gắn với nhiều địa danh, di tích dọc hai bờ. Với Hải Châu, đoạn sông Me là một phần ký ức chung của cư dân các làng ven biển, góp phần làm nên bản sắc vùng đất.",
      ],
    },
  ],
  gallery: [
    { src: "https://thegioidisan.vn/assets/media/2016/Thang%208/kenhnhaledonnhanbangditichquocgia.jpg", alt: "Kênh Nhà Lê", cap: "Kênh Nhà Lê" },
  ],
  sources: [
    { label: "Truyền hình Nghệ An — Kênh Nhà Lê ở Diễn Châu, kênh Mi và vua Lựa Phủ Diễn", url: "https://www.truyenhinhnghean.vn/chuyen-de/201006/kenh-nha-le-o-dien-chau-phan-3-kenh-mi-va-vua-lua-phu-dien-638318/" },
    { label: "Tạp chí Sông Lam — Kênh đào nhà Lê ở huyện Diễn Châu", url: "https://www.tapchisonglam.vn/kenh-dao-nha-le-o-huyen-dien-chau-phan-1/" },
  ],
  related: ["dien-hung", "dien-hai", "den-trang"],
};

HC.destinations["den-trang"] = {
  kind: "Điểm đến",
  num: "04",
  title: "Đền Trang",
  subtitle: "Ngôi đền hơn 250 năm của vùng văn hóa biển Diễn Kim",
  hero: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/den-Trang-.jpg",
  heroAlt: "Đền Trang ở xóm Xuân Châu, Diễn Kim",
  lead:
    "Đền Trang ở xóm Xuân Châu (xã Diễn Kim cũ, nay thuộc Hải Châu) khởi dựng thời Lê Trung hưng, tồn tại hơn 250 năm. Đền thờ võ tướng Phạm Tử Nghi cùng hai vị thần, trong đó có Cá Ông, và lưu giữ 18 đạo sắc phong.",
  facts: [
    ["Địa chỉ", "Xóm Xuân Châu, Diễn Kim"],
    ["Khởi dựng", "Thời Lê Trung hưng (>250 năm)"],
    ["Sắc phong", "18 đạo"],
    ["Xếp hạng", "Di tích cấp tỉnh (2020)"],
  ],
  body: [
    {
      h: "Ngôi đền cổ bên cửa lạch",
      p: [
        "Đền Trang gắn với vùng văn hóa biển Kim Lũy – Hoa Lũy xưa. Đền khởi dựng thời Lê Trung hưng, trải qua hơn 250 năm gắn bó với đời sống tín ngưỡng của cư dân Diễn Kim.",
        "Sau năm 1945, các kỳ lễ tạm dừng để tập trung kháng chiến. Năm 2014, đền được phục dựng và đưa vào sử dụng với kiến trúc 01 gian, 02 chái, 02 hồi, 04 mái, 03 cung, khuôn viên 1.614 m².",
      ],
      img: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/13-thanh-quoc-cong-.jpg",
      alt: "Không gian thờ tự trong Đền Trang",
      cap: "Không gian thờ tự trong Đền Trang.",
    },
    {
      h: "Đối tượng thờ và sắc phong",
      p: [
        "Cung giữa đền thờ Tứ Dương Thành Quốc công Phạm Tử Nghi (sinh năm 1509) — võ tướng thời Mạc, được cả triều Lê và triều Nguyễn ban sắc phong. Hai cung bên thờ Bản thổ Quản Đông Bắc Linh quan và Đông Hải Thái Thú Đại Ngư ông (tức Cá Ông, “Nam Hải đại tướng quân”).",
        "Đền hiện lưu giữ 18 đạo sắc phong của triều Lê và triều Nguyễn đối với ba vị thần, cùng nhiều đồ thờ cổ. Đây là nguồn tư liệu quý để nghiên cứu lịch sử và tín ngưỡng vùng biển.",
      ],
      img: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/Dong-hai-Thai-thu-Dai-Ngu-Ong--e1698893798721.jpg",
      alt: "Tượng thờ Đông Hải Thái Thú Đại Ngư ông",
      cap: "Đông Hải Thái Thú Đại Ngư ông — tức Cá Ông, vị thần được cư dân biển tôn kính.",
    },
    {
      h: "Lễ hội Đền Trang",
      p: [
        "Hằng năm, lễ hội Đền Trang được tổ chức trong hai ngày tháng Giêng âm lịch (Đề án du lịch xã ghi ngày 13–14 tháng Giêng). Phần lễ có dâng hương, tế lễ trang nghiêm theo nghi thức truyền thống; phần hội có văn nghệ, giao lưu thể thao và trò chơi dân gian giữa các xóm.",
        "Bình quân mỗi năm đền đón khoảng 2.000 lượt người đến lễ, bái. Năm 2026, lễ hội Đền Trang là lễ hội đầu tiên được tổ chức sau mô hình chính quyền địa phương hai cấp, thu hút đông đảo nhân dân, con em xa quê và du khách thập phương.",
      ],
      img: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/le-hoi-den-Trang-1-.jpg",
      alt: "Lễ hội Đền Trang",
      cap: "Lễ hội Đền Trang — dịp sinh hoạt văn hóa cộng đồng đầu xuân.",
    },
  ],
  gallery: [
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679929052395_b01090f4e9f5b6f3c15743a415cd7983.jpg", alt: "Lễ hội Đền Trang 2026", cap: "Lễ hội Đền Trang 2026" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7673846823261_2fbd3f6f48a63af95dda31b7d63f17aa-577587.jpg", alt: "Nghi lễ tại Đền Trang", cap: "Nghi lễ" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679926696767_c8dda9adc50de9f31e3c62602a0bd409.jpg", alt: "Người dân dự lễ hội Đền Trang", cap: "Người dân dự lễ" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679927294482_84730cc02d951ea87a691638fb5303e4.jpg", alt: "Không khí lễ hội Đền Trang", cap: "Không khí lễ hội" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7678899881462_963fc20d24f8a67b8e12b797f192b4c6.jpg", alt: "Lễ hội Đền Trang", cap: "Lễ hội Đền Trang" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7673997632898_d76026625ca718d8c27f0de378b605c3.jpg", alt: "Đền Trang trong ngày hội", cap: "Đền Trang trong ngày hội" },
    { src: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/1-Ban-tho-Linh-quan-.jpg", alt: "Ban thờ Linh quan", cap: "Ban thờ Linh quan" },
    { src: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/den-Trang-.jpg", alt: "Toàn cảnh Đền Trang", cap: "Toàn cảnh Đền Trang" },
  ],
  sources: [
    { label: "Tạp chí Sông Lam — Đền Trang, ngôi đền ở vùng văn hóa biển Diễn Kim", url: "https://www.tapchisonglam.vn/den-trang-ngoi-den-o-vung-van-hoa-bien-dien-kim/" },
    { label: "Cổng TTĐT xã Hải Châu — Dấu ấn Lễ hội Đền Trang 2026", url: "https://haichau.nghean.gov.vn/trang-chu/dau-an-le-hoi-den-trang-xa-hai-chau-nam-2026-lan-toa-gia-tri-van-hoa-truyen-thong-trong-giai-doa-1007912" },
  ],
  related: ["le-hoi-den-trang", "dien-kim", "cua-lach-van"],
};

HC.destinations["den-tam-mai"] = {
  kind: "Điểm đến",
  num: "05",
  title: "Đình Tám Mái",
  subtitle: "Kiến trúc cổ độc đáo của làng Hoàng Hà",
  hero: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-1-5523.jpg",
  heroAlt: "Đình Tám Mái ở làng Hoàng Hà, Diễn Hoàng",
  lead:
    "Đình Tám Mái ở xóm Thanh Nam, làng Hoàng Hà, được xây dựng khoảng năm 1896. Đình có kiến trúc tam tòa, hai hồi, cổ lầu, tám mái cùng nghệ thuật chạm khắc gỗ tinh xảo — được công nhận Di tích Lịch sử – Văn hóa cấp tỉnh năm 2008.",
  facts: [
    ["Địa chỉ", "Xóm Thanh Nam, Hoàng Hà"],
    ["Xây dựng", "Khoảng năm 1896"],
    ["Thờ", "Bạch Y Công chúa"],
    ["Xếp hạng", "Di tích cấp tỉnh (2008)"],
  ],
  body: [
    {
      h: "Tám mái và khoảng thông thiên",
      p: [
        "Đình có kiến trúc tam tòa, hai hồi, cổ lầu và tám mái — vì thế dân gian gọi là “Đình Tám Mái”. Giữa đình và điện có một khoảng thông thiên, tạo ánh sáng tự nhiên, được người xưa ví như sự kết nối “linh khí trời – đất”.",
        "Trải qua chiến tranh, kể cả bom Mỹ, ngôi đình vẫn vững chãi, giữ được kiến trúc tinh xảo và vẻ cổ kính gần như nguyên vẹn — điều hiếm thấy ở các công trình cùng thời.",
      ],
      img: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-3-7536.jpg",
      alt: "Hạ đình với kiến trúc hai tầng tám mái",
      cap: "Hạ đình — nhà 3 gian 2 hồi dựng theo lối “trồng diêm”, hai tầng tám mái.",
    },
    {
      h: "Bạch Y Công chúa và truyền thuyết",
      p: [
        "Đình thờ Bạch Y Công chúa (Hồ Thị Phương Dung) và Thành hoàng làng Hoàng Hà. Truyền thuyết kể rằng Bạch Y Công chúa là vị thần giúp Lê Lợi thoát nạn khi bị giặc Minh truy sát; năm 1328, sau khi lên ngôi, Lê Lợi sắc phong bà là “Bạch Y Công chúa” và cho lập đền thờ.",
        "Khoảng năm 1893–1898, ông Phan Văn Khuê (người xóm Hà Trung, quan võ triều Nguyễn) đã huy động dân làng xây dựng ngôi đình Tám Mái khang trang như ngày nay.",
      ],
      img: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-9-1-7760.jpg",
      alt: "Chạm khắc gỗ trong đình Tám Mái",
      cap: "Các kết cấu gỗ như xà, cột kê, đầu khấu được chạm trổ công phu, đề tài “tứ linh”.",
    },
    {
      h: "Lễ Kỳ phúc",
      p: [
        "Hằng năm, lễ Kỳ phúc của đình diễn ra vào ngày 24–25 tháng Giêng âm lịch. Nhân dân trong làng và du khách đến dâng hương, tế lễ, cầu an lành, mùa màng thuận hòa.",
        "Bình quân mỗi năm đình đón khoảng 1.000–1.200 lượt người đến lễ, bái. Đây là dịp gìn giữ bản sắc văn hóa làng và tôn vinh giá trị kiến trúc – điêu khắc cổ của cha ông.",
      ],
      img: "https://mediabtb.baohungyen.vn/upload/news/8_2022/doc_dao_nghe_thuat_kien_truc_dieu_khac_dinh_tam_mai_11382518082022.jpg",
      alt: "Toàn cảnh đình Tám Mái",
      cap: "Toàn cảnh đình Tám Mái — công trình kiến trúc cổ độc đáo.",
    },
  ],
  gallery: [
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/2_11352718082022.jpg", alt: "Đình Tám Mái", cap: "Đình Tám Mái" },
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/4_11361818082022.jpg", alt: "Kiến trúc đình", cap: "Kiến trúc đình" },
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/6_11364518082022.jpg", alt: "Chạm khắc gỗ", cap: "Chạm khắc gỗ" },
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/8_11371218082022.jpg", alt: "Chi tiết điêu khắc", cap: "Chi tiết điêu khắc" },
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/10_11374818082022.jpg", alt: "Không gian đình", cap: "Không gian đình" },
    { src: "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2021/08/18/a1-1629295583.jpg", alt: "Đình Tám Mái", cap: "Đình Tám Mái" },
    { src: "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2021/08/18/a3-1629294400.jpg", alt: "Nội thất đình", cap: "Nội thất đình" },
    { src: "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2021/08/18/a5-1629294938.jpg", alt: "Điêu khắc đình", cap: "Điêu khắc đình" },
  ],
  sources: [
    { label: "Báo Nghệ An — Độc đáo nghệ thuật kiến trúc, điêu khắc đình Tám Mái", url: "https://baonghean.vn/doc-dao-nghe-thuat-kien-truc-dieu-khac-dinh-tam-mai-10243330.html" },
    { label: "Báo Hưng Yên — Nghệ thuật kiến trúc, điêu khắc đình Tám Mái", url: "https://mediabtb.baohungyen.vn/doc-dao-nghe-thuat-kien-truc-dieu-khac-dinh-tam-mai-113825.html" },
  ],
  related: ["le-hoi-dinh-tam-mai", "dien-hoang", "trong-hoang-ha"],
};

HC.destinations["nha-tho-ho-vu"] = {
  kind: "Điểm đến",
  num: "06",
  title: "Nhà thờ họ Vũ đại tôn",
  subtitle: "Báu vật tinh thần của làng Đông Xương xưa",
  hero: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/z7044126104528_eca5fbd09ea3ff07bb414cd844d59fa3-724342.jpg",
  heroAlt: "Nhà thờ họ Vũ đại tôn ở xóm Đông Mỹ, Diễn Mỹ",
  lead:
    "Nhà thờ họ Vũ đại tôn ở xóm Đông Mỹ (Diễn Mỹ cũ) khởi dựng từ năm Canh Ngọ 1510, thờ Tham đốc Dũng Nghĩa hầu Đại tướng quân Vũ Trung Lương. Công trình được công nhận Di tích lịch sử cấp tỉnh năm 2013.",
  facts: [
    ["Địa chỉ", "Xóm Đông Mỹ, Diễn Mỹ"],
    ["Khởi dựng", "Năm 1510"],
    ["Thờ", "Vũ Trung Lương"],
    ["Xếp hạng", "Di tích cấp tỉnh (2013)"],
  ],
  body: [
    {
      h: "Hơn 500 năm dòng họ",
      p: [
        "Nhà thờ họ Vũ khởi tạo từ năm 1510, thờ các bậc tiên tổ họ Vũ, trong đó có Vũ Trung Lương (1434–1510) — Thư tịch họ Vũ, Tham đốc, Đại tướng quân, tước Đặng Nghĩa Hầu.",
        "Vũ Trung Lương có công đánh quân Chiêm Thành, trấn áp thổ phỉ, giữ vững vùng Thái Nguyên. Cuối thế kỷ XV, ông được triều đình ban sắc phong và cấp lộc điền vùng Kẻ Trài – làng Đồng Xương, đưa gia quyến vào khai khẩn, lập nên trang Thủ Ngoa và trang Đồng Câu Thắng (nay là xóm Mỹ Thắng) hơn 500 năm.",
      ],
      img: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/anh2-1694139874-782693.jpg",
      alt: "Không gian thờ tự tại nhà thờ họ Vũ",
      cap: "Không gian thờ tự trang nghiêm trong nhà thờ họ Vũ.",
    },
    {
      h: "Báu vật lưu giữ",
      p: [
        "Nhà thờ còn lưu giữ ngai thờ, bài vị, bản gia phả chữ Hán thời Tự Đức và sắc phong vua Khải Định — những chứng tích quý giá của làng Đông Xương xưa.",
        "Công trình được công nhận Di tích lịch sử cấp tỉnh theo Quyết định số 3507/QĐ-UBND ngày 12/8/2013. Dòng họ và nhân dân địa phương vẫn duy trì hương khói, lễ bái hằng năm.",
      ],
      img: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/anh-3-1694139917-892082.jpg",
      alt: "Sắc phong thời Khải Định lưu giữ tại nhà thờ họ Vũ",
      cap: "Sắc phong và gia phả chữ Hán — báu vật của dòng họ.",
    },
  ],
  gallery: [
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/z7044126104528_eca5fbd09ea3ff07bb414cd844d59fa3-724342.jpg", alt: "Nhà thờ họ Vũ", cap: "Nhà thờ họ Vũ" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/anh-3-1694139917-892082.jpg", alt: "Sắc phong cổ", cap: "Sắc phong cổ" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20259/anh2-1694139874-782693.jpg", alt: "Không gian thờ tự", cap: "Không gian thờ tự" },
  ],
  sources: [
    { label: "Cổng TTĐT xã Hải Châu — Di tích Nhà thờ họ Vũ đại tôn", url: "https://haichau.nghean.gov.vn/trang-chu/di-tich-nha-tho-ho-vu-dai-ton-xom-dong-my-xa-hai-chau-bau-vat-tinh-than-cua-lang-dong-xuong-xua-974890?pageindex=0" },
  ],
  related: ["dien-my", "hat-tuong", "nghe-moc-dien-my"],
};

HC.destinations["vung-nuoi-tom"] = {
  kind: "Điểm đến",
  num: "07",
  title: "Vùng nuôi tôm công nghệ cao",
  subtitle: "Điểm sáng kinh tế của đất Diễn Kim",
  hero: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-1.jpeg",
  heroAlt: "Mô hình nuôi tôm công nghệ cao ở Diễn Kim",
  lead:
    "Vùng nuôi tôm công nghệ cao ở địa bàn Diễn Kim cũ là điểm sáng của ngành nuôi trồng thủy sản xã Hải Châu. Với ao bể nổi nhà lưới và quy trình khép kín, mô hình cho năng suất và hiệu quả kinh tế cao.",
  facts: [
    ["Lĩnh vực", "Nuôi trồng thủy sản"],
    ["Địa bàn", "Diễn Kim"],
    ["Diện tích CNC", "~70 ha (toàn huyện)"],
    ["Năng suất", "~20 tấn/ha/vụ"],
  ],
  body: [
    {
      h: "Nuôi trồng thủy sản, không phải nông nghiệp",
      p: [
        "Cần phân biệt rõ: nuôi tôm là hoạt động nuôi trồng thủy sản, thuộc lĩnh vực thủy sản — không phải nông nghiệp trồng trọt. Đây là ngành kinh tế mũi nhọn của vùng ven biển Diễn Kim.",
        "Toàn huyện Diễn Châu có trên 160 ha nuôi tôm, trong đó khoảng 70 ha áp dụng công nghệ cao với năng suất ước đạt 20 tấn/ha mỗi vụ. Diễn Kim là một trong những địa bàn trọng điểm của mô hình này.",
      ],
      img: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-2.jpeg",
      alt: "Ao nuôi tôm công nghệ cao",
      cap: "Ao bể nổi nhà lưới — mô hình nuôi tôm công nghệ cao cho hiệu quả kinh tế cao.",
    },
    {
      h: "Mô hình và hiệu quả",
      p: [
        "Mô hình tiêu biểu là các ao bể nổi có nhà lưới che phủ, kiểm soát được nhiệt độ, ánh sáng và dịch bệnh. Nhờ vậy, người nuôi có thể chủ động nhiều vụ trong năm, giảm rủi ro so với ao đất truyền thống.",
        "Nhiều hộ ở Diễn Kim đã đầu tư mô hình này từ năm 2018 và đạt lợi nhuận cao. Đây là hướng phát triển được khuyến khích, gắn với chuyển dịch cơ cấu kinh tế ven biển của xã Hải Châu.",
      ],
    },
  ],
  gallery: [
    { src: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-1.jpeg", alt: "Nuôi tôm công nghệ cao", cap: "Nuôi tôm công nghệ cao" },
    { src: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-2.jpeg", alt: "Ao nuôi tôm", cap: "Ao nuôi tôm" },
  ],
  sources: [
    { label: "Sở KH&CN Nghệ An — Hiệu quả kinh tế từ mô hình nuôi tôm công nghệ cao", url: "https://ngheandost.gov.vn/nong-nghiep/dien-chau-hieu-qua-kinh-te-tu-mo-hinh-nuoi-tom-cong-nghe-cao-6894.html" },
  ],
  related: ["nuoi-tom-cnc", "dien-kim", "be-mang-ca-trich"],
};

HC.destinations["cua-lach-van"] = {
  kind: "Điểm đến",
  num: "08",
  title: "Cửa biển Lạch Vạn",
  subtitle: "Một trong sáu cửa lạch lớn của Nghệ An",
  hero: "https://media3.baotintuc.vn/images/XtMI2cTUOu7JtJPwFuYGlFxpGJfQM4i3uVAmsHDk7q73FKaEFKuhjbxSYQW-as3fonpZztO5H-vDVVS8RCYrWLKsnK8yaa_HKIWQRq9rf3clf8pFd6N-gRzbJ35Eqo9aVihvcn-P7VRPPs8UiKb9cA/vna-potal-ron-rang-cua-bien-lach-van-dien-chau-nghe-an-7206139-4477.jpg",
  heroAlt: "Cửa biển Lạch Vạn ở Diễn Châu",
  lead:
    "Lạch Vạn là nơi sông Bùng đổ ra biển, một trong sáu cửa lạch lớn của Nghệ An. Cửa lạch gắn với nhịp sống của tàu thuyền, bến cá và những làng chài trù phú của vùng Diễn Kim.",
  facts: [
    ["Vị trí", "Sông Bùng đổ ra biển"],
    ["Vai trò", "Cửa lạch lớn của Nghệ An"],
    ["Gắn với", "Tàu thuyền · bến cá"],
  ],
  body: [
    {
      h: "Cửa ngõ ra khơi",
      p: [
        "Lạch Vạn là cửa biển nơi con sông Bùng hòa vào Biển Đông. Đây là cửa ngõ ra khơi của tàu thuyền trong vùng, đồng thời là nơi trú đậu, trao đổi hàng hóa hải sản.",
        "Vào mỗi con nước, tàu thuyền nối đuôi nhau ra vào cửa lạch, tạo nên khung cảnh nhộn nhịp. Bến cá gần cửa lạch là nơi tập kết hải sản tươi từ các chuyến biển về.",
      ],
      img: "https://media3.baotintuc.vn/images/XtMI2cTUOu7JtJPwFuYGlFxpGJfQM4i3uVAmsHDk7q73FKaEFKuhjbxSYQW-as3fGhotPybFjPRlp4rfQb2BtzTmOvM9QvojUuyyPmE4mssg9rmvhffwtk12F_fqQy3ugYIBWR3gnlKhMItLsiiVqSDaPDmgOpSX0b0Uegg-J_g/vna-potal-ngu-dan-dien-chau-nghe-an-vao-mua-khai-thac-ca-trich-7241331-9725.jpg",
      alt: "Ngư dân Diễn Châu vào mùa khai thác cá trích",
      cap: "Ngư dân vào mùa khai thác cá trích gần cửa lạch.",
    },
    {
      h: "Đời sống quanh cửa lạch",
      p: [
        "Cư dân quanh Lạch Vạn sống bằng nghề biển, chế biến hải sản và các nghề dịch vụ liên quan. Những phong tục như cúng thuyền, tế cá Ông thể hiện niềm tin và lòng biết ơn biển cả của ngư dân.",
        "Cửa lạch cũng là điểm nhấn cảnh quan, thu hút du khách đến ngắm bình minh, xem tàu thuyền ra vào và tìm hiểu đời sống làng chài.",
      ],
      img: "https://media3.baotintuc.vn/images/XtMI2cTUOu7JtJPwFuYGlFxpGJfQM4i3uVAmsHDk7q73FKaEFKuhjbxSYQW-as3fGhotPybFjPRlp4rfQb2BtzTmOvM9QvojUuyyPmE4mssg9rmvhffwtk12F_fqQy3u6g1BCeFapUCWUrOSyP-j6I0qThdKOu0Z2KetTUTIQTI/vna-potal-ngu-dan-dien-chau-nghe-an-vao-mua-khai-thac-ca-trich-7241336-3248.jpg",
      alt: "Ngư dân mùa cá trích",
      cap: "Mùa cá trích — mùa làm ăn chính của ngư dân gần bờ.",
    },
  ],
  gallery: [
    { src: "https://media3.baotintuc.vn/images/XtMI2cTUOu7JtJPwFuYGlFxpGJfQM4i3uVAmsHDk7q73FKaEFKuhjbxSYQW-as3fonpZztO5H-vDVVS8RCYrWLKsnK8yaa_HKIWQRq9rf3clf8pFd6N-gRzbJ35Eqo9aVihvcn-P7VRPPs8UiKb9cA/vna-potal-ron-rang-cua-bien-lach-van-dien-chau-nghe-an-7206139-4477.jpg", alt: "Cửa biển Lạch Vạn", cap: "Cửa biển Lạch Vạn" },
    { src: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/02/09/112725-36.jpg", alt: "Cúng thuyền của ngư dân", cap: "Lễ tục cúng thuyền" },
    { src: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/02/09/112905-37.jpg", alt: "Ngư dân làm lễ cúng thuyền", cap: "Nghi lễ cúng thuyền" },
    { src: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Medium/2024/02/09/104318-31.jpg", alt: "Lễ cúng thuyền làng biển", cap: "Lễ cúng thuyền" },
  ],
  sources: [
    { label: "Dân tộc & Miền núi — Nhịp sống đằm đà ở làng biển Diễn Châu", url: "https://dantocmiennui.baotintuc.vn/nhip-song-dam-da-o-lang-bien-dien-chau-post1372656.html" },
    { label: "Chính sách & Cuộc sống — Lễ tục cúng thuyền của ngư dân làng biển", url: "https://chinhsachcuocsong.vnanet.vn/net-dep-van-hoa-trong-le-tuc-cung-thuyen-cua-ngu-dan-lang-bien/34373.html" },
  ],
  related: ["dien-kim", "be-mang-ca-trich", "ngay-hoi-ca-trich"],
};

HC.destinations["duong-ven-bien"] = {
  kind: "Điểm đến",
  num: "09",
  title: "Cung đường ven biển",
  subtitle: "Tuyến đường ngắm biển Nghi Sơn – Cửa Lò",
  hero: "https://bna.1cdn.vn/2025/08/20/bna_duong-1.jpg",
  heroAlt: "Cung đường ven biển Nghệ An chạy dọc bờ biển",
  lead:
    "Cung đường ven biển Nghi Sơn (Thanh Hóa) – Cửa Lò (Nghệ An) là tuyến đường mới men theo bờ biển, đi qua 5 địa phương của Nghệ An gồm thị xã Hoàng Mai, huyện Quỳnh Lưu, huyện Diễn Châu, huyện Nghi Lộc và thị xã Cửa Lò. Đoạn qua Diễn Châu dài khoảng 24,4 km, trong đó đoạn qua Diễn Hùng dài 3,87 km.",
  facts: [
    ["Tuyến", "Nghi Sơn – Cửa Lò"],
    ["Đoạn Diễn Châu", "~24,4 km"],
    ["Đoạn Diễn Hùng", "3,87 km"],
    ["Điểm nhấn", "Cầu Lạch Vạn"],
  ],
  body: [
    {
      h: "Một cung đường men biển",
      p: [
        "Tuyến đường ven biển được thi công theo tiêu chuẩn đường cấp III đồng bằng, mặt đường rộng, chạy sát bờ biển nên mở ra tầm nhìn thoáng đãng ra Biển Đông. Những đoạn qua Diễn Châu, Diễn Hùng uốn theo thế đất, một bên là ruộng đồng và làng chài, một bên là bãi cát và rừng phi lao phòng hộ.",
        "Cung đường không chỉ phục vụ giao thông mà còn tạo ra một trục cảnh quan mới, rút ngắn hành trình giữa các xã ven biển và mở thêm cơ hội cho du lịch, dịch vụ nghỉ dưỡng dọc bờ biển Nghệ An.",
      ],
      img: "https://bna.1cdn.vn/2025/08/20/bna_duong-2.jpg",
      alt: "Cung đường ven biển Nghệ An uốn theo bờ biển",
      cap: "Cung đường ven biển chạy men theo bờ biển Nghệ An.",
    },
    {
      h: "Cầu Lạch Vạn — điểm nhấn trên tuyến",
      p: [
        "Trên toàn tuyến có 8 cây cầu bắc qua các cửa sông, cửa lạch, trong đó 5 cầu lớn là Hoàng Mai, Lạch Quèn, Cửa Thơi, Lạch Vạn và Nghi Quang. Cầu Lạch Vạn bắc qua cửa lạch cùng tên, nối liền mạch đường ven biển qua địa bàn Diễn Châu.",
        "Từ cầu Lạch Vạn, người đi đường có thể phóng tầm mắt ra cửa biển, ngắm tàu thuyền ra vào và vùng nuôi trồng thủy sản ven bờ — một trong những khung cảnh đặc trưng của vùng biển Diễn Châu.",
      ],
      img: "https://bna.1cdn.vn/2025/08/20/bna_duong-3.jpg",
      alt: "Cầu trên tuyến đường ven biển Nghệ An",
      cap: "Những cây cầu lớn nối liền mạch đường ven biển.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2025/08/20/bna_duong-1.jpg", alt: "Cung đường ven biển Nghệ An", cap: "Cung đường ven biển" },
    { src: "https://bna.1cdn.vn/2025/08/20/bna_duong-2.jpg", alt: "Đường ven biển men theo bờ biển", cap: "Men theo bờ biển" },
    { src: "https://bna.1cdn.vn/2025/08/20/bna_duong-3.jpg", alt: "Cầu trên tuyến đường ven biển", cap: "Cầu trên tuyến" },
    { src: "https://bna.1cdn.vn/2025/08/20/bna_duong-4.jpg", alt: "Tuyến đường ven biển Nghệ An", cap: "Tuyến đường ven biển" },
    { src: "https://bna.1cdn.vn/2025/08/20/bna_duong-6.jpg", alt: "Đường ven biển qua vùng ven biển Nghệ An", cap: "Đường ven biển" },
    { src: "https://bna.1cdn.vn/2025/08/20/bna_cau-lach-van-1-.jpg", alt: "Cầu Lạch Vạn trên tuyến đường ven biển", cap: "Cầu Lạch Vạn" },
  ],
  sources: [
    { label: "Báo Nghệ An — Đường ven biển, động lực phát triển cho Nghệ An", url: "https://baonghean.vn/duong-ven-bien-dong-luc-phat-trien-cho-nghe-an-10304779.html" },
    { label: "Cổng TTĐT Nghệ An — Dự án đường ven biển qua 5 huyện, thị", url: "https://www.nghean.gov.vn/kinh-te/du-an-duong-ven-bien-di-qua-5-huyen-thi-nghe-an-duoc-cam-ket-giai-ngan-het-trong-nam-2022-488920" },
    { label: "VietnamNet — Toàn cảnh tuyến đường ven biển hơn 4.600 tỷ đồng qua Nghệ An", url: "https://vietnamnet.vn/toan-canh-tuyen-duong-ven-bien-hon-4-600-ty-dong-qua-tinh-nghe-an-2544504.html" },
  ],
  related: ["dien-hung", "cua-lach-van", "vung-nuoi-tom"],
};

/* ---------- 3. LỄ HỘI ---------- */
HC.festivals["le-hoi-den-trang"] = {
  kind: "Lễ hội",
  num: "01",
  title: "Lễ hội Đền Trang",
  subtitle: "Tháng Giêng · xóm Xuân Châu, Diễn Kim",
  hero: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679929052395_b01090f4e9f5b6f3c15743a415cd7983.jpg",
  heroAlt: "Lễ hội Đền Trang xã Hải Châu",
  lead:
    "Lễ hội Đền Trang là lễ hội truyền thống lâu đời của cư dân vùng biển Diễn Kim, tổ chức hai ngày tháng Giêng âm lịch. Đây là dịp tưởng nhớ tiền nhân và các vị thần, gắn kết cộng đồng làng chài.",
  facts: [
    ["Địa điểm", "Đền Trang, xóm Xuân Châu"],
    ["Thời gian", "13–14 tháng Giêng âm lịch"],
    ["Quy mô", "~2.000 lượt/năm"],
    ["Xếp hạng", "Di tích cấp tỉnh (2020)"],
  ],
  body: [
    {
      h: "Nguồn gốc và nghi lễ",
      p: [
        "Đền Trang khởi dựng thời Lê Trung hưng, thờ Tứ Dương Thành Quốc công Phạm Tử Nghi cùng Bản thổ Quản Đông Bắc Linh quan và Đông Hải Thái Thú Đại Ngư ông (Cá Ông). Đền lưu giữ 18 đạo sắc phong của triều Lê và triều Nguyễn.",
        "Phần lễ gồm dâng hương và tế lễ trang nghiêm theo nghi thức truyền thống. Các nghi thức thể hiện đạo lý “uống nước nhớ nguồn”, tri ân tiền nhân và các vị thần đã che chở cho cư dân miền biển.",
      ],
      img: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7673846823261_2fbd3f6f48a63af95dda31b7d63f17aa-577587.jpg",
      alt: "Nghi lễ tại Lễ hội Đền Trang",
      cap: "Phần lễ trang nghiêm theo nghi thức truyền thống.",
    },
    {
      h: "Phần hội và ý nghĩa",
      p: [
        "Phần hội diễn ra sôi nổi với văn nghệ, giao lưu thể thao và các trò chơi dân gian giữa các xóm. Tiếng trống hội, tiếng reo hò làm bừng lên không khí đầu xuân của cả vùng biển.",
        "Năm 2026, lễ hội Đền Trang là lễ hội đầu tiên được tổ chức sau khi xã Hải Châu đi vào hoạt động theo mô hình chính quyền địa phương hai cấp, thu hút đông đảo nhân dân, con em xa quê và du khách thập phương, có lãnh đạo xã và đại diện Sở VHTT&DL tỉnh Nghệ An dự.",
      ],
      img: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679927294482_84730cc02d951ea87a691638fb5303e4.jpg",
      alt: "Không khí lễ hội Đền Trang",
      cap: "Phần hội với văn nghệ và trò chơi dân gian.",
    },
  ],
  gallery: [
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679929052395_b01090f4e9f5b6f3c15743a415cd7983.jpg", alt: "Lễ hội Đền Trang", cap: "Lễ hội Đền Trang 2026" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7679926696767_c8dda9adc50de9f31e3c62602a0bd409.jpg", alt: "Người dân dự hội", cap: "Người dân dự hội" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7678899881462_963fc20d24f8a67b8e12b797f192b4c6.jpg", alt: "Không khí lễ hội", cap: "Không khí lễ hội" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7673997632898_d76026625ca718d8c27f0de378b605c3.jpg", alt: "Đền Trang ngày hội", cap: "Đền Trang ngày hội" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7673997744470_7b753fefa9be3ed14d2f2ff6baabf15f.jpg", alt: "Lễ hội Đền Trang", cap: "Lễ hội Đền Trang" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/z7673995441549_5cbd2d1b53a365c75863216ba7a39a50.jpg", alt: "Nghi thức lễ hội", cap: "Nghi thức lễ hội" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6649/quantritintuc20264/653717888_3426081944226442_5767735996484102918_n.jpg", alt: "Lễ hội Đền Trang 2026", cap: "Lễ hội 2026" },
    { src: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/le-hoi-den-Trang-1-.jpg", alt: "Lễ hội Đền Trang", cap: "Lễ hội Đền Trang" },
  ],
  sources: [
    { label: "Cổng TTĐT xã Hải Châu — Dấu ấn Lễ hội Đền Trang 2026", url: "https://haichau.nghean.gov.vn/trang-chu/dau-an-le-hoi-den-trang-xa-hai-chau-nam-2026-lan-toa-gia-tri-van-hoa-truyen-thong-trong-giai-doa-1007912" },
    { label: "Tạp chí Sông Lam — Đền Trang", url: "https://www.tapchisonglam.vn/den-trang-ngoi-den-o-vung-van-hoa-bien-dien-kim/" },
  ],
  related: ["den-trang", "dien-kim", "le-hoi-cau-ngu"],
};

HC.festivals["le-hoi-den-ba-quan"] = {
  kind: "Lễ hội",
  num: "02",
  title: "Lễ Kỳ phúc Đền Bà Quận",
  subtitle: "11–12 tháng Giêng · làng Hoàng La, Diễn Hoàng",
  hero: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517611_1b.jpg",
  heroAlt: "Đền Bà Quận ở làng Hoàng La",
  lead:
    "Đền Bà Quận và Nhà thờ họ Nguyễn ở làng Hoàng La là nơi diễn ra lễ Kỳ phúc ngày 11–12 tháng Giêng và lễ giỗ Bà ngày 27/9 âm lịch. Đền thờ Quận chúa Nguyễn Thị Ngọc Oanh, người có công chiêu dân lập ấp.",
  facts: [
    ["Địa điểm", "Làng Hoàng La, Diễn Hoàng"],
    ["Kỳ phúc", "11–12 tháng Giêng"],
    ["Giỗ Bà", "27/9 âm lịch"],
    ["Xếp hạng", "Di tích cấp tỉnh (2007)"],
  ],
  body: [
    {
      h: "Bà Quận và công cuộc lập ấp",
      p: [
        "Đền Bà Quận xây dựng cuối thế kỷ XVI, thờ Quận chúa Nguyễn Thị Ngọc Oanh — người Thanh Hóa, năm 1522 theo cha là Nguyễn Nghiễm (Nguyễn Công Nghiễm) vào Nghệ An.",
        "Bà có công chiêu dân lập ấp, xây dựng 19 trang ấp quanh vùng Cửa Càn – Vạn Sơn (trung tâm là Phủ Trung), gồm các trang như Phủ Trung (nay là làng Hoàng La), Đồng Tí (nay là Phú Yên), Khác My (nay là Kẻ Me – Diễn Hùng), Hùng Cồ (nay là Câu Hùng), đồng thời phò Lê đánh Mạc.",
        "Nhà thờ họ Nguyễn bên cạnh thờ các bậc tiền tổ họ Nguyễn, trong đó có Nguyễn Công Nghiễm — cha của Bà Quận, người có công phò Lê đánh Mạc, được vua Lê Trang Tông sắc phong.",
      ],
      img: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517612_1a.jpg",
      alt: "Không gian Đền Bà Quận",
      cap: "Đền Bà Quận gồm Điện thờ, Hậu Điện và Trung Điện, khuôn viên 1.500 m².",
    },
    {
      h: "Lễ Kỳ phúc cầu yên",
      p: [
        "Lễ Kỳ phúc diễn ra ngày 11–12 tháng Giêng âm lịch, cầu quốc thái dân an, mùa màng tốt tươi. Ngoài ra, nhân dân còn thắp hương vào mùng 1 và ngày rằm hằng tháng.",
        "Bình quân mỗi năm đền đón khoảng 3.000–3.500 lượt du khách đến lễ, bái. Đây cũng là địa chỉ giáo dục truyền thống yêu nước cho học sinh, sinh viên và du khách.",
      ],
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517611_1b.jpg", alt: "Đền Bà Quận", cap: "Đền Bà Quận" },
    { src: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517612_1a.jpg", alt: "Đền Bà Quận", cap: "Đền Bà Quận" },
  ],
  sources: [
    { label: "Báo Nghệ An — Đền Bà Quận", url: "https://baonghean.vn" },
  ],
  related: ["dien-hoang", "le-hoi-dinh-tam-mai", "den-tam-mai"],
};

HC.festivals["le-hoi-dinh-tam-mai"] = {
  kind: "Lễ hội",
  num: "03",
  title: "Lễ Kỳ phúc Đình Tám Mái",
  subtitle: "24–25 tháng Giêng · làng Hoàng Hà, Diễn Hoàng",
  hero: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-1-5523.jpg",
  heroAlt: "Đình Tám Mái trong lễ Kỳ phúc",
  lead:
    "Lễ Kỳ phúc Đình Tám Mái diễn ra ngày 24–25 tháng Giêng âm lịch tại xóm Thanh Nam, làng Hoàng Hà. Đây là dịp dâng hương tưởng nhớ Bạch Y Công chúa và Thành hoàng làng.",
  facts: [
    ["Địa điểm", "Đình Tám Mái, Hoàng Hà"],
    ["Thời gian", "24–25 tháng Giêng"],
    ["Quy mô", "~1.000–1.200 lượt/năm"],
    ["Xếp hạng", "Di tích cấp tỉnh (2008)"],
  ],
  body: [
    {
      h: "Nghi lễ đầu xuân",
      p: [
        "Đình Tám Mái thờ Bạch Y Công chúa (Hồ Thị Phương Dung) và Thành hoàng làng Hoàng Hà. Lễ Kỳ phúc đầu năm là dịp dân làng dâng hương, tế lễ, cầu an lành và mùa màng thuận hòa.",
        "Các nghi thức được tổ chức trang nghiêm trong không gian kiến trúc cổ với tám mái và những mảng chạm khắc gỗ tinh xảo, tạo nên không khí linh thiêng, ấm cúng của làng quê ngày xuân.",
      ],
      img: "https://mediabtb.baohungyen.vn/upload/news/8_2022/4_11361818082022.jpg",
      alt: "Không gian đình Tám Mái",
      cap: "Không gian kiến trúc cổ trong ngày lễ.",
    },
    {
      h: "Giữ gìn bản sắc",
      p: [
        "Lễ Kỳ phúc gắn với sinh hoạt văn hóa – tín ngưỡng của làng, góp phần gìn giữ bản sắc và giá trị kiến trúc – điêu khắc cổ mà cha ông để lại.",
        "Ngoài lễ chính, nhân dân thường đến lễ, bái vào các ngày rằm và mùng 1 hằng tháng, duy trì nếp sinh hoạt tâm linh quanh năm.",
      ],
    },
  ],
  gallery: [
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/doc_dao_nghe_thuat_kien_truc_dieu_khac_dinh_tam_mai_11382518082022.jpg", alt: "Đình Tám Mái", cap: "Đình Tám Mái" },
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/6_11364518082022.jpg", alt: "Chạm khắc đình", cap: "Chạm khắc đình" },
    { src: "https://mediabtb.baohungyen.vn/upload/news/8_2022/8_11371218082022.jpg", alt: "Điêu khắc gỗ", cap: "Điêu khắc gỗ" },
    { src: "https://phuongnam.vanhoavaphattrien.vn/uploads/images/2021/08/18/a2-1629295039.jpg", alt: "Đình Tám Mái", cap: "Đình Tám Mái" },
  ],
  sources: [
    { label: "Báo Nghệ An — Độc đáo nghệ thuật kiến trúc, điêu khắc đình Tám Mái", url: "https://baonghean.vn/doc-dao-nghe-thuat-kien-truc-dieu-khac-dinh-tam-mai-10243330.html" },
  ],
  related: ["den-tam-mai", "dien-hoang", "le-hoi-den-ba-quan"],
};

HC.festivals["le-hoi-den-nguyen-cong-vinh"] = {
  kind: "Lễ hội",
  num: "04",
  title: "Lễ giỗ Đền Thái tể Nguyễn Công Vinh",
  subtitle: "1/9 âm lịch · làng Phú Yên, Diễn Hoàng",
  hero: "https://bna.1cdn.vn/2022/08/17/uploaded-huythubna-2022_08_17-_bna-3-7536.jpg",
  heroAlt: "Đền thờ Thái tể Nguyễn Công Vinh",
  lead:
    "Đền thờ Thái tể Nguyễn Công Vinh ở làng Phú Yên là nơi diễn ra lễ giỗ ngày 1/9 âm lịch và lễ Kỳ phúc ngày 11 tháng Giêng. Đền thờ vị quan có công phò Lê đánh Mạc.",
  facts: [
    ["Địa điểm", "Làng Phú Yên, Diễn Hoàng"],
    ["Lễ giỗ", "1/9 âm lịch"],
    ["Kỳ phúc", "11 tháng Giêng"],
    ["Xếp hạng", "Di tích cấp tỉnh (2018)"],
  ],
  body: [
    {
      h: "Người có công với quê hương",
      p: [
        "Đền khởi dựng thời Nguyễn, chạm khắc tỉ mỉ, thờ Thái tể Nguyễn Công Vinh — người có công cùng cha là Thượng tướng quân Nguyễn Công Nghiễm phò Lê đánh Mạc (thế kỷ XVI). Khi mất, ông được nhà vua phong Thánh và cho lập đền tại làng Phú Yên.",
        "Đền cũng thờ các vị thần Bản thổ và các dòng họ Lê, Hồ, Nguyễn, Bùi, Vũ của làng, thể hiện truyền thống gắn kết cộng đồng dòng họ – làng xã.",
      ],
      img: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517611_1b.jpg",
      alt: "Không gian đền thờ",
      cap: "Đền thờ Thái tể Nguyễn Công Vinh.",
    },
    {
      h: "Lễ giỗ và lễ Kỳ phúc",
      p: [
        "Lễ giỗ ngày 1/9 âm lịch và lễ Kỳ phúc ngày 11 tháng Giêng là hai dịp quan trọng trong năm, thu hút khoảng 700–800 lượt khách đến lễ, bái.",
        "Các nghi lễ dâng hương, tế lễ nhằm tri ân người có công với quê hương, đất nước, đồng thời gắn kết cộng đồng dòng họ và nhân dân địa phương.",
      ],
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517612_1a.jpg", alt: "Đền thờ", cap: "Đền thờ" },
    { src: "https://bna.1cdn.vn/2016/04/24/uploaded-dataimages-201604-original-_images1517611_1b.jpg", alt: "Đền thờ", cap: "Đền thờ" },
  ],
  sources: [
    { label: "Cổng TTĐT tỉnh Nghệ An — Danh mục di tích, lễ hội", url: "https://nghean.gov.vn/festivals" },
  ],
  related: ["dien-hoang", "le-hoi-den-ba-quan"],
};

HC.festivals["ngay-hoi-ca-trich"] = {
  kind: "Lễ hội",
  num: "05",
  title: "Ngày hội cá trích",
  subtitle: "Bãi biển Làng Kim · xã Hải Châu",
  hero: "https://cdn.nhandan.vn/images/7GQNpQgdVw900Cx84DO8d_C0m9bqwRWAwP2FRBwXGcY8e8say2JAFcaFxBiD6AcAcZj7Fnl8AGwafQiw_IxiSLnFSEUfIShdOSypPM_VFOHmZ9N2v4aZcLg70qnqEuDq/trongchinhcatrichnuong-09-177517652345078793505.jpg.webp",
  heroAlt: "Cá trích nướng tại ngày hội cá trích",
  lead:
    "Ngày hội cá trích được tổ chức lần đầu năm 2026 tại bãi biển Làng Kim, xã Hải Châu. Đây là sự kiện tôn vinh nghề biển và mùa cá trích, hướng tới trở thành sản phẩm du lịch thường niên.",
  facts: [
    ["Địa điểm", "Bãi biển Làng Kim, Hải Châu"],
    ["Lần đầu", "Năm 2026"],
    ["Khai mạc", "18h ngày 31/3/2026"],
  ],
  body: [
    {
      h: "Tôn vinh nghề biển",
      p: [
        "Cá trích là loài hải sản gắn với đời sống ngư dân ven biển Diễn Châu. Mùa cá trích về cũng là mùa làm ăn chính của những chiếc bè mảng gần bờ, mang lại thu nhập tiền triệu mỗi chuyến.",
        "Ngày hội cá trích ra đời nhằm tôn vinh nghề biển, quảng bá hình ảnh, văn hóa và nghề biển của cư dân ven biển, đồng thời định hướng xây dựng thành sản phẩm du lịch thường niên gắn với trải nghiệm làng chài và ẩm thực biển.",
      ],
      img: "https://cdn.nhandan.vn/images/7GQNpQgdVw900Cx84DO8d_C0m9bqwRWAwP2FRBwXGcY8e8say2JAFcaFxBiD6AcAcZj7Fnl8AGwafQiw_IxiSLnFSEUfIShdOSypPM_VFOHmZ9N2v4aZcLg70qnqEuDq/trongchinhcatrichnuong-09-177517652345078793505.jpg.webp",
      alt: "Cá trích nướng",
      cap: "Cá trích nướng — món ăn làm nên tên tuổi của vùng biển Diễn Châu.",
    },
    {
      h: "Hoạt động của ngày hội",
      p: [
        "Lễ khai mạc được tổ chức vào 18h ngày 31/3/2026, với văn nghệ và bắn pháo hoa. Hàng chục gian hàng bày bán cá trích tươi, cá phơi khô và cá trích nướng tại chỗ.",
        "Du khách được trải nghiệm không khí làng chài ngay trên bãi cát, thưởng thức hải sản tươi và tìm hiểu về nghề biển truyền thống của địa phương.",
      ],
      img: "https://bna.1cdn.vn/2026/04/05/bna_khong-khi-nhon-nhip-tai-ngay-hoi-ca-trich-o-xa-hai-chau.jpg",
      alt: "Không khí nhộn nhịp tại ngày hội cá trích ở xã Hải Châu",
      cap: "Không khí nhộn nhịp tại ngày hội cá trích trên bãi biển Làng Kim, xã Hải Châu.",
    },
  ],
  gallery: [
    { src: "https://cdn.nhandan.vn/images/7GQNpQgdVw900Cx84DO8d_C0m9bqwRWAwP2FRBwXGcY8e8say2JAFcaFxBiD6AcAcZj7Fnl8AGwafQiw_IxiSLnFSEUfIShdOSypPM_VFOHmZ9N2v4aZcLg70qnqEuDq/trongchinhcatrichnuong-09-177517652345078793505.jpg.webp", alt: "Cá trích nướng", cap: "Cá trích nướng" },
    { src: "https://bna.1cdn.vn/2026/04/05/bna_khong-khi-nhon-nhip-tai-ngay-hoi-ca-trich-o-xa-hai-chau.jpg", alt: "Ngày hội cá trích ở xã Hải Châu", cap: "Ngày hội cá trích ở xã Hải Châu" },
    { src: "https://bna.1cdn.vn/2026/04/05/bna_ca-2-c23816c0eb10d18103a6fbc52850751e.jpg", alt: "Du khách tại ngày hội cá trích", cap: "Du khách tại ngày hội cá trích" },
    { src: "https://bna.1cdn.vn/2026/04/05/bna_ca-3-1f2d5fc30583e98a11e5ac2481c396fe.jpg", alt: "Cá trích tại ngày hội", cap: "Cá trích bày bán tại ngày hội" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/032026/bna_1_20260323152901.jpg", alt: "Cá trích nướng than hồng", cap: "Cá trích nướng than hồng trên bãi biển" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/032026/bna_5_20260323152901.jpg", alt: "Thực khách thưởng thức cá trích nướng", cap: "Thực khách thưởng thức cá trích nướng" },
    { src: "https://i.ex-cdn.com/danviet.vn/files/content/2026/03/25/2-235443.jpg", alt: "Cá trích nướng", cap: "Cá trích nướng thơm lừng" },
    { src: "https://i.ex-cdn.com/danviet.vn/files/content/2026/03/25/4-235444.jpg", alt: "Món cá trích nướng", cap: "Cá trích nướng cuốn rau sống, bánh tráng" },
    { src: "https://bna.1cdn.vn/2025/02/27/uploaded-xuanhoangbna-2023_03_20-_goicatrich800-800x450-4924.jpg", alt: "Ngư dân gỡ cá trích", cap: "Ngư dân gỡ cá trích sau chuyến biển" },
    { src: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_18571612_232022.jpg", alt: "Mùa cá trích", cap: "Mùa cá trích" },
    { src: "https://media3.baotintuc.vn/images/XtMI2cTUOu7JtJPwFuYGlFxpGJfQM4i3uVAmsHDk7q73FKaEFKuhjbxSYQW-as3fGhotPybFjPRlp4rfQb2BtzTmOvM9QvojUuyyPmE4mssg9rmvhffwtk12F_fqQy3ugYIBWR3gnlKhMItLsiiVqSDaPDmgOpSX0b0Uegg-J_g/vna-potal-ngu-dan-dien-chau-nghe-an-vao-mua-khai-thac-ca-trich-7241331-9725.jpg", alt: "Ngư dân mùa cá trích", cap: "Ngư dân mùa cá trích" },
  ],
  sources: [
    { label: "Báo Nhân Dân — Xây dựng thương hiệu riêng cho mỗi làng biển", url: "https://nhandan.vn/xay-dung-thuong-hieu-rieng-cho-moi-lang-bien-post954250.html" },
    { label: "Báo Nghệ An — Từ trend cá trích đến “mỏ vàng” văn hóa biển", url: "https://baonghean.vn/tu-trend-ca-trich-den-mo-vang-van-hoa-bien-10331534.html" },
  ],
  related: ["be-mang-ca-trich", "cua-lach-van", "dien-kim"],
};

HC.festivals["le-hoi-cau-ngu"] = {
  kind: "Lễ hội",
  num: "06",
  title: "Lễ hội Cầu ngư – Mở cửa biển",
  subtitle: "Tháng Giêng · vùng biển Diễn Châu (lân cận)",
  hero: "https://bna.1cdn.vn/2025/02/17/bna_7(2).jpg",
  heroAlt: "Lễ hội cầu ngư, mở cửa biển Diễn Châu",
  lead:
    "Lễ hội Cầu ngư – Mở cửa biển là lễ hội lớn nhất của cư dân ven biển Diễn Châu, diễn ra đầu năm. Đoàn rước dài gần 1 km từ đền Cả sang cảng cá Đông Lộc với nghi thức truyền thống đặc sắc.",
  facts: [
    ["Địa điểm", "Vùng biển Diễn Châu"],
    ["Thời gian", "Tháng Giêng âm lịch"],
    ["Đoàn rước", "dài gần 1 km"],
    ["Nghi thức", "“nhúng giã” trên tàu"],
  ],
  body: [
    {
      h: "Nghi thức cầu ngư",
      p: [
        "Phần lễ gồm nhiều nghi thức như lễ khai quang, lễ yết cáo, lễ cầu ngư, lễ đại tế, lễ tạ, lễ cầu yên và lễ thả hoa. Đặc biệt là nghi thức “nhúng giã” trên tàu thuyền, đánh dấu mùa khai thác hải sản mới.",
        "Đoàn rước dài gần 1 km từ đền Cả sang cảng cá Đông Lộc với rước kiệu, múa lân sư rồng, tế nam quan – nữ quan, bát âm, dâng hương hoa… Lễ thả hoa diễn ra trên sông Bùng, nối cảng cá Đông Lộc với cửa biển Lạch Vạn.",
      ],
      img: "https://bna.1cdn.vn/2025/02/17/bna_1(2).jpg",
      alt: "Đoàn rước trong lễ cầu ngư",
      cap: "Đoàn rước với nghi thức truyền thống của cư dân biển.",
    },
    {
      h: "Phần hội và ý nghĩa",
      p: [
        "Phần hội sôi nổi với kéo co, bịt mắt bắt vịt, thi đan lưới giã (tái hiện gần 100 năm nghề sản xuất ngư – lưới cụ), giao lưu văn nghệ giữa các xóm và trưng bày sản phẩm địa phương.",
        "Lễ hội nhằm tri ân chư thần, cầu mưa thuận gió hòa, quê hương thanh bình, cầu luồng lạch khơi thông để ngư dân ra khơi vào lộng bình an, tôm cá đầy khoang.",
      ],
      img: "https://bna.1cdn.vn/2025/02/17/bna_5(4).jpg",
      alt: "Phần hội lễ cầu ngư",
      cap: "Phần hội với các trò chơi dân gian và thi đan lưới.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2025/02/17/bna_7(2).jpg", alt: "Lễ cầu ngư", cap: "Lễ cầu ngư" },
    { src: "https://bna.1cdn.vn/2025/02/17/bna_2(2).jpg", alt: "Rước kiệu", cap: "Rước kiệu" },
    { src: "https://bna.1cdn.vn/2025/02/17/bna_8(1).jpg", alt: "Nghi lễ", cap: "Nghi lễ" },
    { src: "https://bna.1cdn.vn/2025/02/17/bna_10.jpg", alt: "Lễ hội cầu ngư", cap: "Lễ hội cầu ngư" },
    { src: "https://bna.1cdn.vn/2025/02/17/bna_1(2).jpg", alt: "Đoàn rước", cap: "Đoàn rước" },
  ],
  sources: [
    { label: "Báo Nghệ An — Ngư dân Diễn Châu tưng bừng khai hội cầu ngư, mở cửa biển", url: "https://baonghean.vn/ngu-dan-dien-chau-tung-bung-khai-hoi-cau-ngu-mo-cua-bien-10291355.html" },
  ],
  related: ["cua-lach-van", "le-hoi-den-trang", "ngay-hoi-ca-trich"],
};

HC.festivals["le-hoi-den-cuong"] = {
  kind: "Lễ hội",
  num: "07",
  title: "Lễ hội Đền Cuông",
  subtitle: "14–15 tháng 2 âm lịch · Diễn Châu (lân cận)",
  hero: "https://vietnamtourism.vn/imguploads/tourist/2014/NgheAn/42LHdencuong01.jpg",
  heroAlt: "Lễ hội Đền Cuông",
  lead:
    "Lễ hội Đền Cuông ở chân núi Mộ Dạ là một trong những lễ hội lớn nhất của huyện Diễn Châu, thờ Thục Phán – An Dương Vương. Lễ hội có nghi thức rước vua Thục và Mỵ Châu đặc sắc.",
  facts: [
    ["Địa điểm", "Đền Cuông, chân núi Mộ Dạ"],
    ["Thời gian", "14–15 tháng 2 âm lịch"],
    ["Thờ", "An Dương Vương"],
    ["Xếp hạng", "Di tích Quốc gia đặc biệt"],
  ],
  body: [
    {
      h: "Rước vua Thục và Mỵ Châu",
      p: [
        "Đền Cuông thờ Thục Phán – An Dương Vương, vị vua gắn với sự tích nỏ thần và thành Cổ Loa. Lễ hội có nghi thức rước vua Thục và Mỵ Châu từ đình làng Xuân Ái về đền Cuông, tái hiện trang sử bi thương của nước Âu Lạc.",
        "Đây là một trong những lễ hội thu hút đông đảo nhân dân và du khách của huyện Diễn Châu, gắn với khu di tích lịch sử – văn hóa cấp Quốc gia đặc biệt.",
      ],
      img: "https://vietnamtourism.vn/imguploads/tourist/2014/NgheAn/42LHdencuong02.jpg",
      alt: "Không khí lễ hội Đền Cuông",
      cap: "Lễ hội Đền Cuông thu hút đông đảo du khách.",
    },
  ],
  gallery: [
    { src: "https://vietnamtourism.vn/imguploads/tourist/2014/NgheAn/42LHdencuong01.jpg", alt: "Đền Cuông", cap: "Đền Cuông" },
    { src: "https://vietnamtourism.vn/imguploads/tourist/2014/NgheAn/42LHdencuong02.jpg", alt: "Lễ hội Đền Cuông", cap: "Lễ hội Đền Cuông" },
    { src: "https://vietnamtourism.vn/imguploads/tourist/2014/NgheAn/42LHdencuong03.jpg", alt: "Rước kiệu", cap: "Rước kiệu" },
    { src: "https://vietnamtourism.vn/imguploads/tourist/2014/NgheAn/42LHdencuong04.jpg", alt: "Lễ hội", cap: "Lễ hội" },
  ],
  sources: [
    { label: "Tổng cục Du lịch — Lễ hội Đền Cuông", url: "https://vietnamtourism.vn" },
    { label: "Cổng TTĐT tỉnh Nghệ An — Danh mục lễ hội", url: "https://nghean.gov.vn/festivals" },
  ],
  related: ["le-hoi-cau-ngu", "dien-my"],
};

HC.festivals["le-hoi-dinh-long-an"] = {
  kind: "Lễ hội",
  num: "08",
  title: "Lễ hội Đình Long Ân",
  subtitle: "24 tháng Giêng · Hùng Châu (lân cận)",
  hero: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la1.jpg",
  heroAlt: "Lễ hội Đình Long Ân",
  lead:
    "Đình Long Ân xây dựng năm 1885, là địa chỉ đỏ gắn với phong trào Xô Viết Nghệ Tĩnh. Lễ hội diễn ra ngày 24 tháng Giêng âm lịch, thu hút đông đảo nhân dân địa phương.",
  facts: [
    ["Địa điểm", "Đình Long Ân, Hùng Châu"],
    ["Thời gian", "24 tháng Giêng âm lịch"],
    ["Xây dựng", "Năm 1885"],
    ["Xếp hạng", "Di tích Quốc gia (1992)"],
  ],
  body: [
    {
      h: "Địa chỉ đỏ cách mạng",
      p: [
        "Đình Long Ân thuộc Tổng Hoàng Trường, phủ Diễn Châu xưa, thờ Thành hoàng làng và là nơi nhân dân tổ chức lễ cầu phúc, cầu yên. Đình được xây dựng năm 1885.",
        "Đây là nơi thành lập Chi bộ Đảng đầu tiên của Tổng Hoàng Trường và là nơi phát lệnh, xuất phát đoàn biểu tình lịch sử ngày 14/10/1930 trong phong trào Xô Viết Nghệ Tĩnh. Đình được công nhận Di tích Lịch sử – Văn hóa cấp Quốc gia năm 1992.",
      ],
      img: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la2.jpg",
      alt: "Lễ hội Đình Long Ân",
      cap: "Lễ hội Đình Long Ân — dịp giáo dục truyền thống cách mạng.",
    },
  ],
  gallery: [
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la1.jpg", alt: "Đình Long Ân", cap: "Đình Long Ân" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la2.jpg", alt: "Lễ hội Đình Long Ân", cap: "Lễ hội" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la3.jpg", alt: "Nghi lễ", cap: "Nghi lễ" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la4.jpg", alt: "Dâng hương", cap: "Dâng hương" },
    { src: "https://datafiles.nghean.gov.vn/nan-ubnd/6714/quantritintuc20263/la9.jpg", alt: "Lễ hội", cap: "Lễ hội" },
  ],
  sources: [
    { label: "Cổng TTĐT xã Hùng Châu — Lễ hội Đình Long Ân Xuân Bính Ngọ 2026", url: "https://hungchau.nghean.gov.vn/du-lich-dia-phuong/xa-hung-chau-to-chuc-le-hoi-dinh-long-an-xuan-binh-ngo-nam-2026-1004177" },
  ],
  related: ["le-hoi-dinh-tam-mai", "le-hoi-den-cuong"],
};

HC.festivals["tuc-tho-ca-ong"] = {
  kind: "Lễ hội",
  num: "09",
  title: "Tục thờ Cá Ông &amp; cúng thuyền",
  subtitle: "Tín ngưỡng biển của cư dân Diễn Châu",
  hero: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/02/09/112725-36.jpg",
  heroAlt: "Lễ tục cúng thuyền của ngư dân làng biển",
  lead:
    "Tục thờ Cá Ông và lễ cúng thuyền rằm tháng Bảy là những phong tục độc đáo của cư dân miền chân sóng Nghệ An, thể hiện lòng biết ơn biển cả và cầu mong bình an cho người đi biển.",
  facts: [
    ["Đối tượng", "Cá Ông (cá Voi)"],
    ["Thời gian", "Rằm tháng Bảy (15/7 âm lịch)"],
    ["Ý nghĩa", "Cầu an cho ngư dân"],
  ],
  body: [
    {
      h: "Tục thờ Cá Ông",
      p: [
        "Cư dân biển kiêng gọi thẳng “cá Voi” mà tôn kính gọi là Cá Ông. Tương truyền Cá Ông từng cứu Nguyễn Ánh (Gia Long) khi bị quân Tây Sơn truy đuổi, sau được phong “Nam Hải đại tướng quân”.",
        "Đền Trang ở Diễn Kim là một trong những nơi thờ Cá Ông tiêu biểu, với cung thờ Đông Hải Thái Thú Đại Ngư ông. Ngư dân tin rằng Cá Ông che chở, giúp họ vượt qua sóng gió nơi biển khơi.",
      ],
      img: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/02/09/112905-37.jpg",
      alt: "Nghi lễ cúng thuyền",
      cap: "Nghi lễ cúng thuyền cầu an cho người đi biển.",
    },
    {
      h: "Cúng thuyền rằm tháng Bảy",
      p: [
        "Cúng thuyền rằm tháng Bảy (15/7 âm lịch) là phong tục độc đáo của cư dân miền chân sóng Nghệ An. Người dân làm lễ trên thuyền và bên bờ biển để cầu an cho ngư dân, cầu mùa đánh bắt thuận lợi.",
        "Ngoài ra còn có lễ Táo Quân (23 tháng Chạp) — nghi lễ cuối năm của cư dân biển. Những phong tục này góp phần tạo nên bản sắc văn hóa biển đặc sắc của vùng Diễn Châu.",
      ],
      img: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Medium/2024/02/09/104318-31.jpg",
      alt: "Lễ cúng thuyền làng biển",
      cap: "Lễ tục cúng thuyền của ngư dân làng biển.",
    },
  ],
  gallery: [
    { src: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/02/09/112725-36.jpg", alt: "Cúng thuyền", cap: "Cúng thuyền" },
    { src: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2024/02/09/112905-37.jpg", alt: "Nghi lễ", cap: "Nghi lễ" },
    { src: "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Medium/2024/02/09/104318-31.jpg", alt: "Lễ cúng thuyền", cap: "Lễ cúng thuyền" },
    { src: "https://www.tapchisonglam.vn/wp-content/uploads/2023/11/Dong-hai-Thai-thu-Dai-Ngu-Ong--e1698893798721.jpg", alt: "Tượng Đông Hải Thái Thú Đại Ngư ông", cap: "Đông Hải Thái Thú Đại Ngư ông" },
  ],
  sources: [
    { label: "Chính sách & Cuộc sống — Lễ tục cúng thuyền của ngư dân làng biển", url: "https://chinhsachcuocsong.vnanet.vn/net-dep-van-hoa-trong-le-tuc-cung-thuyen-cua-ngu-dan-lang-bien/34373.html" },
    { label: "VietnamPlus — Độc đáo phong tục cúng rằm tháng Bảy ở miền chân sóng", url: "https://www.vietnamplus.vn/nghe-an-doc-dao-phong-tuc-cung-ram-thang-bay-o-nhung-mien-chan-song-post1060271.vnp" },
  ],
  related: ["den-trang", "cua-lach-van", "le-hoi-den-trang"],
};

/* ---------- 4. NGHỀ TRUYỀN THỐNG ---------- */
HC.crafts["trong-hoang-ha"] = {
  kind: "Nghề truyền thống",
  num: "01",
  title: "Làm trống da Hoàng Hà",
  subtitle: "Làng Hoàng Hà, Diễn Hoàng — hơn 200 năm",
  hero: "https://bna.1cdn.vn/2025/01/16/bna_-trong-dep.-anh-phu-huong.jpg",
  heroAlt: "Trống da làng Hoàng Hà",
  lead:
    "Làng trống da Hoàng Hà (Diễn Hoàng) có tuổi đời khoảng 200 năm, do dòng họ Nguyễn mang nghề từ miền Bắc vào, truyền nối qua 16 đời. Đây là một trong những làng nghề bền vững của huyện Diễn Châu.",
  facts: [
    ["Địa bàn", "Làng Hoàng Hà, Diễn Hoàng"],
    ["Tuổi nghề", "~200 năm · 16 đời"],
    ["Số hộ còn nghề", "~14 hộ"],
    ["Thu nhập", "40–50 triệu đ/người/năm"],
  ],
  body: [
    {
      h: "Nghề của dòng họ Nguyễn",
      p: [
        "Ông tổ nghề là Nguyễn Phúc Giang và Nguyễn Phúc Đạt, dòng dõi họ Nguyễn Đình, hậu duệ Cương quốc Công Nguyễn Xí, mang nghề từ miền Bắc vào làng “cắm dùi” trên đất Diễn Hoàng. Nghề được truyền nối bí truyền qua nhiều đời.",
        "Thời thịnh, cả làng có trên 40 hộ làm trống; nay còn khoảng 14 hộ với 50 nghệ nhân. Nghệ nhân tiêu biểu có ông Nguyễn Xuân Kỷ (gần 60 năm nghề) và anh Nguyễn Đình Cát.",
      ],
      img: "https://bna.1cdn.vn/2025/01/16/bna_-trong-nha-ong-nguyen-dinh-cat-luon-co-san-trong-dap-ung-nhu-cau-khach-mua.-anh-phu-huong.jpg",
      alt: "Nhà nghệ nhân Nguyễn Đình Cát với trống thành phẩm",
      cap: "Nhà nghệ nhân Nguyễn Đình Cát luôn có sẵn trống đáp ứng nhu cầu khách mua.",
    },
    {
      h: "Ba khâu, một đời nghề",
      p: [
        "Làm trống gồm ba khâu chính: làm da, làm tang (thân trống) và bưng trống. Gỗ phải là mít già từ 40 năm tuổi trở lên, chỉ dùng gỗ lõi để không cong vênh, giữ tiếng. Da dùng là da trâu, bò già nuôi 3–4 năm.",
        "Da được rửa sạch, không dùng hóa chất, bào mỏng rồi căng trên khung tre phơi nắng 2–3 ngày, ủ trong bóng mát 2–3 giờ cho nhuần mới căng và bào theo kích thước mặt trống. Tang trống ghép từ dăm gỗ mít không cần móc khớp — nét riêng của trống Hoàng Hà.",
        "Khâu bào da mặt trống là khó nhất, quyết định âm thanh. Người thợ phải cảm nhận độ căng, độ dày để cho ra tiếng trống vang, bền, đúng “giọng” của từng loại trống.",
      ],
      img: "https://bna.1cdn.vn/2025/01/16/bna_-da.-anh-phu-huong.jpg",
      alt: "Da làm mặt trống được phơi căng",
      cap: "Da trâu, bò được bào mỏng, căng phơi nắng trước khi bưng vào mặt trống.",
    },
    {
      h: "Hơn mười loại trống",
      p: [
        "Trống Hoàng Hà có hơn 10 loại: trống sấm, trống trầu, trống đình, trống trường học, trống lân, trống chiến, trống lệnh, trống cơm, trống cái, trống bát, trống bồng… Mỗi loại có độ vang, độ trầm khác nhau tùy mục đích sử dụng.",
        "Giá tham khảo khoảng 3 triệu đồng với trống trung và tới 7 triệu đồng với trống đại chạm trổ. Dịp Tết và lễ hội, khách khắp nơi tìm về đặt hàng, giúp làng nghề giữ được nhịp sống đều đặn.",
      ],
      img: "https://bna.1cdn.vn/2025/01/16/bna_-do-chi-tiet.-anh-phu-huong.jpg",
      alt: "Chi tiết trống da Hoàng Hà",
      cap: "Chi tiết sản phẩm trống da Hoàng Hà.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-trong-dep.-anh-phu-huong.jpg", alt: "Trống đẹp Hoàng Hà", cap: "Trống đẹp Hoàng Hà" },
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-1.-anh-phu-huong.jpg", alt: "Trống Hoàng Hà", cap: "Trống Hoàng Hà" },
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-2.-anh-phu-huong.jpg", alt: "Sản phẩm trống", cap: "Sản phẩm trống" },
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-3.-anh-phu-huong.jpg", alt: "Trống", cap: "Trống" },
    { src: "https://bna.1cdn.vn/2025/01/16/bna_-4.-anh-phu-huong.jpg", alt: "Trống", cap: "Trống" },
    { src: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/1/12/tieng-vang-lang-trong-hoang-ha10-17366919254721409717055.jpg", alt: "Làng trống Hoàng Hà", cap: "Làng trống Hoàng Hà" },
    { src: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/1/12/tieng-vang-lang-trong-hoang-ha9-173669192546391585278.jpg", alt: "Nghệ nhân làm trống", cap: "Nghệ nhân làm trống" },
    { src: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/1/12/tieng-vang-lang-trong-hoang-ha3-17366919186512037996475.jpg", alt: "Tiếng vang làng trống", cap: "Tiếng vang làng trống" },
  ],
  sources: [
    { label: "Báo Tin tức — Âm vang tiếng trống Hoàng Hà", url: "https://baotintuc.vn/am-vang-tieng-trong-hoang-ha-post538564.html" },
    { label: "Sức khỏe & Đời sống — Vang mãi tiếng trống Hoàng Hà", url: "https://suckhoedoisong.vn/vang-mai-tieng-trong-hoang-ha-169250112212710554.htm" },
    { label: "Báo Nghệ An — Hối hả làng trống Hoàng Hà dịp cuối năm", url: "https://baonghean.vn/hoi-ha-lang-trong-hoang-ha-dip-cuoi-nam-10289589.html" },
  ],
  related: ["dien-hoang", "den-tam-mai", "ben-vong"],
};

HC.crafts["nuoi-tam-dien-kim"] = {
  kind: "Nghề truyền thống",
  num: "02",
  title: "Nuôi tằm – ươm tơ Diễn Kim",
  subtitle: "Làng Tiền Tiến — tơ sợi trắng muốt bán sang Lào",
  hero: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-ba-duc-5945.jpg",
  heroAlt: "Làng nghề tơ tằm Diễn Kim",
  lead:
    "Làng Tiền Tiến (Diễn Kim) nổi tiếng với nghề trồng dâu, nuôi tằm, ươm tơ, dệt lụa hàng trăm năm. Tơ tằm Diễn Kim trắng muốt, được bán cho các làng dệt trong tỉnh và xuất sang Lào.",
  facts: [
    ["Địa bàn", "Làng Tiền Tiến, Diễn Kim"],
    ["Diện tích dâu", "60 ha"],
    ["Hộ nuôi tằm", "95 hộ"],
    ["Sản phẩm", "Kén · tơ sợi · nhộng tằm"],
  ],
  body: [
    {
      h: "Nghề hàng trăm năm",
      p: [
        "Nghề trồng dâu nuôi tằm ở Diễn Kim có lịch sử hàng trăm năm, có gia đình theo nghề 5–7 thế hệ. Cuối thập niên 1990, nghề phát triển mạnh với hàng trăm ha dâu, hơn 200 hộ nuôi tằm và gần 50 máy dệt đũi.",
        "Đến năm 2023, làng Tiền Tiến có 60 ha trồng dâu và 95 hộ nuôi tằm dệt đũi, trong đó 17 hộ chế biến ươm tơ. Mỗi năm làng bán ra khoảng 30 tấn kén, 3,5 tấn tơ sợi và 15–17 tấn nhộng tằm.",
      ],
      img: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-tam-an-5741.jpg",
      alt: "Tằm đang ăn lá dâu",
      cap: "Tằm ăn dâu — công đoạn quan trọng quyết định chất lượng kén.",
    },
    {
      h: "Từ kén đến tơ",
      p: [
        "Tằm được nuôi bằng lá dâu tươi, sau chu kỳ khoảng 26 ngày thì nhả kén. Kén được ươm thành tơ sợi — sản phẩm chính cung cấp cho các làng dệt trong tỉnh, các tỉnh phía Bắc và xuất sang Lào với giá hơn 1 triệu đồng/kg.",
        "Tơ tằm Diễn Kim thường “cháy hàng” vì chất lượng trắng, mượt. Ngoài tơ, nhộng tằm còn được chế biến thành món ăn, phân tằm bán làm phân bón với giá 10–12 triệu đồng/tấn.",
      ],
      img: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-to-3486.jpg",
      alt: "Tơ sợi thành phẩm",
      cap: "Tơ sợi thành phẩm — sản phẩm chính của làng nghề.",
    },
    {
      h: "Mô hình “tằm thông minh”",
      p: [
        "Từ năm 2016, nhiều hộ đầu tư mô hình “tằm thông minh” — cho tằm nhả tơ đan trực tiếp trên khuôn để ra tấm thảm tơ xuất khẩu, cho giá trị kinh tế gấp đôi so với tơ ươm thủ công.",
        "Năm 2018, làng được tổ chức JICA (Nhật Bản) hỗ trợ kỹ thuật nuôi tằm. Nhờ đó, nghề tơ tằm Diễn Kim không chỉ được giữ gìn mà còn từng bước hiện đại hóa, nâng cao thu nhập cho người dân.",
      ],
      img: "https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/122022/27/11/dien-kim-nghe-an-lang-nghe-voi-mo-hinh-nuoi-tam-thong-minh-15-.2923.jpg",
      alt: "Mô hình nuôi tằm thông minh ở Diễn Kim",
      cap: "Mô hình nuôi tằm thông minh — hướng đi mới của làng nghề.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-ba-thu-7148.jpg", alt: "Hái dâu", cap: "Hái dâu" },
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-4-7012.jpg", alt: "Vườn dâu", cap: "Vườn dâu" },
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-ghep-3-4424.jpg", alt: "Nuôi tằm", cap: "Nuôi tằm" },
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-ong-truong-4805.jpg", alt: "Ông Nguyễn Văn Trường, Giám đốc HTX", cap: "Giám đốc HTX dâu tằm" },
    { src: "https://bna.1cdn.vn/2023/11/11/uploaded-thanhphucbna-2023_11_11-_bna-phan-tam-3471.jpg", alt: "Phân tằm", cap: "Phân tằm" },
    { src: "https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/122022/27/11/dien-kim-nghe-an-lang-nghe-voi-mo-hinh-nuoi-tam-thong-minh-15-.3684.jpg", alt: "Nuôi tằm thông minh", cap: "Nuôi tằm thông minh" },
    { src: "https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/122022/27/11/dien-kim-nghe-an-lang-nghe-voi-mo-hinh-nuoi-tam-thong-minh-15-.5762.jpg", alt: "Kén tằm", cap: "Kén tằm" },
    { src: "https://i.ex-cdn.com/danviet.vn/files/content/2025/05/28/145205trong-dau-nuoi-tam-4-1113.jpg", alt: "Trồng dâu nuôi tằm", cap: "Trồng dâu nuôi tằm" },
  ],
  sources: [
    { label: "Báo Nghệ An — Làng quê xứ Nghệ nô nức bán sản phẩm từ con tằm", url: "https://baonghean.vn/lang-que-xu-nghe-no-du-nho-ban-san-pham-tu-con-tam-10263693.html" },
    { label: "Làng nghề Việt — Diễn Kim: làng nghề với mô hình nuôi tằm thông minh", url: "https://langngheviet.com.vn/dien-kim-nghe-an-lang-nghe-voi-mo-hinh-nuoi-tam-thong-minh-21819.html" },
    { label: "Dân Việt — Nuôi con vật chỉ ăn một loại lá, nhả ra thứ sợi trắng muốt", url: "https://danviet.vn/nuoi-con-vat-chi-an-mot-loai-la-nha-ra-thu-soi-trang-muot-ban-sang-lao-gia-1-trieu-kg-ca-lang-nghe-an-kha-gia-d1335667.html" },
  ],
  related: ["dien-kim", "vung-nuoi-tom", "banh-muot"],
};

HC.crafts["dan-nom"] = {
  kind: "Nghề truyền thống",
  num: "03",
  title: "Đan nơm Hoàng Tiến",
  subtitle: "Thôn Hoàng Tiến — hơn 1 thế kỷ bên phiên chợ quê",
  hero: "https://bna.1cdn.vn/2026/08/05/bna_nom-1-.jpg",
  heroAlt: "Đan nơm ở thôn Hoàng Tiến",
  lead:
    "Thôn Hoàng Tiến (xã Hải Châu) có nghề đan nơm tre hơn một thế kỷ, gắn với các phiên chợ quê như chợ Dinh, Nam Khê, Giát. Nghề đang mai một nhưng được “cứu” bằng cách bán hàng online.",
  facts: [
    ["Địa bàn", "Thôn Hoàng Tiến, Hải Châu"],
    ["Tuổi nghề", "hơn 1 thế kỷ"],
    ["Số hộ còn nghề", "~10 hộ"],
    ["Giá", "150.000–200.000 đ/chiếc"],
  ],
  body: [
    {
      h: "Tre, mây và bàn tay khéo",
      p: [
        "Nguyên liệu làm nơm là tre gai và mây, phải mua từ các xã miền núi Nghệ An, Thanh Hóa, có thời điểm nhập từ Lào. Tre được ngâm 3–6 tháng để chống mối mọt rồi mới chẻ nan.",
        "Quy trình gồm nhiều công đoạn: chẻ tre/mây, vót răng, chuốt mây, uốn vành, bện đầu, bện chân, vô vành, nức tay cầm. Mỗi chiếc nơm dài 50–70 cm, đan từ 60–80 nan tre kết hợp dây mây.",
      ],
      img: "https://bna.1cdn.vn/2026/08/05/bna_nom-6-.jpg",
      alt: "Chẻ tre đan nơm",
      cap: "Chẻ tre, vót nan — công đoạn đòi hỏi sự khéo léo.",
    },
    {
      h: "Mai một và hồi sinh nhờ online",
      p: [
        "Trung bình mỗi người làm được 2 chiếc nơm mỗi ngày, giá 150.000–200.000 đồng/chiếc, thu nhập 5–7 triệu đồng/tháng, chủ yếu làm lúc nông nhàn.",
        "Tuy vậy, nghề đang mai một rõ rệt: toàn thôn chỉ còn khoảng 10 hộ, so với 50–60 hộ cách đây 10 năm. Người trẻ rời nghề vì thu nhập thấp.",
        "Từ năm 2024, anh Nguyễn Đình Trọng — người trẻ nhất theo nghề — đã đưa nơm lên Facebook, TikTok và bán được cho khách ở Cà Mau, Quảng Nam, Đắk Lắk, Thanh Hóa. Đây là tín hiệu tích cực để giữ nghề truyền thống.",
      ],
      img: "https://bna.1cdn.vn/2026/08/05/bna_nom-22-.jpg",
      alt: "Nơm tre thành phẩm",
      cap: "Nơm tre thành phẩm — sản phẩm của làng nghề trăm tuổi.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-1-.jpg", alt: "Đan nơm", cap: "Đan nơm" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-7-.jpg", alt: "Nơm tre", cap: "Nơm tre" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-9-.jpg", alt: "Làm nơm", cap: "Làm nơm" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-11-.jpg", alt: "Nơm", cap: "Nơm" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-13-.jpg", alt: "Sản phẩm nơm", cap: "Sản phẩm nơm" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-16-.jpg", alt: "Đan nơm", cap: "Đan nơm" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-20-.jpg", alt: "Nơm tre", cap: "Nơm tre" },
    { src: "https://bna.1cdn.vn/2026/08/05/bna_nom-22-.jpg", alt: "Nơm thành phẩm", cap: "Nơm thành phẩm" },
  ],
  sources: [
    { label: "Báo Nghệ An — Làng đan nơm trăm tuổi ở Nghệ An lên sàn online", url: "https://baonghean.vn/lang-dan-nom-tram-tuoi-o-nghe-an-len-san-online-10347009.html" },
  ],
  related: ["dien-kim", "be-mang-ca-trich", "banh-muot"],
};

HC.crafts["nuoi-tom-cnc"] = {
  kind: "Nghề truyền thống",
  num: "04",
  title: "Nuôi tôm công nghệ cao",
  subtitle: "Diễn Kim — nuôi trồng thủy sản, không phải nông nghiệp",
  hero: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-1.jpeg",
  heroAlt: "Ao nuôi tôm công nghệ cao ở Diễn Kim",
  lead:
    "Nuôi tôm công nghệ cao ở Diễn Kim là hoạt động nuôi trồng thủy sản, không phải nông nghiệp trồng trọt. Mô hình ao bể nổi nhà lưới cho năng suất và hiệu quả kinh tế cao.",
  facts: [
    ["Lĩnh vực", "Nuôi trồng thủy sản"],
    ["Địa bàn", "Diễn Kim"],
    ["Diện tích CNC", "~70 ha (toàn huyện)"],
    ["Năng suất", "~20 tấn/ha/vụ"],
  ],
  body: [
    {
      h: "Phân biệt rõ lĩnh vực",
      p: [
        "Cần nhấn mạnh: nuôi tôm thuộc lĩnh vực nuôi trồng thủy sản, không phải nông nghiệp. Đây là ngành kinh tế mũi nhọn của vùng ven biển Diễn Kim, tận dụng lợi thế nước mặn, nước lợ.",
        "Toàn huyện Diễn Châu có trên 160 ha nuôi tôm, trong đó khoảng 70 ha áp dụng công nghệ cao, năng suất ước đạt 20 tấn/ha mỗi vụ — cao hơn nhiều so với ao đất truyền thống.",
      ],
      img: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-2.jpeg",
      alt: "Ao nuôi tôm công nghệ cao",
      cap: "Ao bể nổi nhà lưới — mô hình nuôi tôm công nghệ cao.",
    },
    {
      h: "Mô hình và hiệu quả",
      p: [
        "Mô hình tiêu biểu là ao bể nổi có nhà lưới che phủ, kiểm soát nhiệt độ, ánh sáng và dịch bệnh, cho phép nuôi nhiều vụ trong năm và giảm rủi ro. Nhiều hộ ở Diễn Kim đã đầu tư từ năm 2018 và đạt lợi nhuận cao.",
        "Đây là hướng phát triển được khuyến khích, gắn với chuyển dịch cơ cấu kinh tế ven biển của xã Hải Châu, tạo việc làm và nâng cao thu nhập cho người dân.",
      ],
    },
  ],
  gallery: [
    { src: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-1.jpeg", alt: "Nuôi tôm công nghệ cao", cap: "Nuôi tôm công nghệ cao" },
    { src: "https://ngheandost.gov.vn/uploads/news/2024_09/image-20240920092801-2.jpeg", alt: "Ao nuôi tôm", cap: "Ao nuôi tôm" },
  ],
  sources: [
    { label: "Sở KH&CN Nghệ An — Hiệu quả kinh tế từ mô hình nuôi tôm công nghệ cao", url: "https://ngheandost.gov.vn/nong-nghiep/dien-chau-hieu-qua-kinh-te-tu-mo-hinh-nuoi-tom-cong-nghe-cao-6894.html" },
  ],
  related: ["vung-nuoi-tom", "dien-kim", "be-mang-ca-trich"],
};

HC.crafts["be-mang-ca-trich"] = {
  kind: "Nghề truyền thống",
  num: "05",
  title: "Bè mảng &amp; mùa cá trích",
  subtitle: "Diễn Kim · Diễn Hải · Diễn Hùng — nghề gần bờ",
  hero: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_31894220_232022.jpg",
  heroAlt: "Bè mảng ra khơi mùa cá trích",
  lead:
    "Đánh bắt hải sản gần bờ bằng bè mảng là nghề truyền thống của ngư dân Diễn Kim, Diễn Hải, Diễn Hùng. Mỗi sáng tinh mơ, bè mảng nối đuôi ra khơi và trở về bờ khi trời vừa hửng.",
  facts: [
    ["Địa bàn", "Diễn Kim · Diễn Hải · Diễn Hùng"],
    ["Số bè mảng", "~300 (toàn huyện)"],
    ["Công suất máy", "20–35 CV"],
    ["Sản phẩm", "Cá trích · ruốc · sứa · tôm tít"],
  ],
  body: [
    {
      h: "Con bè mảng",
      p: [
        "Bè mảng là phương tiện đánh bắt gần bờ đặc trưng của ngư dân Diễn Châu. Mỗi bè dài khoảng 7 m, rộng hơn 2 m, tải trọng hơn 2 tấn, dùng được 3–5 năm và lắp máy 20–35 CV. Chi phí lắp mới một bè hơn 60 triệu đồng.",
        "Bè được đóng từ cây mét già, xốp, gỗ, khung inox và dây cước. Nhiều bè đã lắp tời thủy lực thay cho tời thủ công, giúp việc kéo lưới nhẹ nhàng hơn.",
      ],
      img: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_74016314_232022.jpg",
      alt: "Cá trích vừa đánh bắt",
      cap: "Cá trích vừa lên bãi — bán ngay trên bờ.",
    },
    {
      h: "Mùa cá trích",
      p: [
        "Ngư dân thả lưới từ 2–7 giờ sáng. Mỗi bè mang theo khoảng 500 sải lưới (gần 600 m), chi phí dầu khoảng 300.000 đồng mỗi chuyến. Mỗi bè thu về khoảng 1–1,5 tạ cá (bè may mắn được 2–3 tạ), bán tiền triệu ngay tại bờ.",
        "Ngoài cá trích, ngư dân còn đánh bắt ruốc biển, sứa, tôm tít, cá bầu, cá lẹp, cá dớp… “gối vụ” mỗi vụ 3–4 tháng. Nghề cào ngao (ngao giấy, ngao dầu) khi thủy triều xuống là nghề truyền thống của phụ nữ và trẻ em trong vùng.",
      ],
      img: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_61643229_232022.jpg",
      alt: "Ngư dân và hải sản",
      cap: "Hải sản tươi bán ngay trên bãi biển.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca1298620_232022.jpg", alt: "Bè mảng", cap: "Bè mảng" },
    { src: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_18571612_232022.jpg", alt: "Mùa cá trích", cap: "Mùa cá trích" },
    { src: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_52213126_232022.jpg", alt: "Cá trích", cap: "Cá trích" },
    { src: "https://bna.1cdn.vn/2022/03/02/uploaded-xuanhoangbna-2022_03_02-_bna_ca_27669801_232022.jpg", alt: "Ngư dân", cap: "Ngư dân" },
    { src: "https://media3.baotintuc.vn/images/XtMI2cTUOu7JtJPwFuYGlFxpGJfQM4i3uVAmsHDk7q73FKaEFKuhjbxSYQW-as3fGhotPybFjPRlp4rfQb2BtzTmOvM9QvojUuyyPmE4mssg9rmvhffwtk12F_fqQy3ugYIBWR3gnlKhMItLsiiVqSDaPDmgOpSX0b0Uegg-J_g/vna-potal-ngu-dan-dien-chau-nghe-an-vao-mua-khai-thac-ca-trich-7241331-9725.jpg", alt: "Ngư dân mùa cá trích", cap: "Ngư dân mùa cá trích" },
  ],
  sources: [
    { label: "Dân tộc & Miền núi — Nhịp sống đằm đà ở làng biển Diễn Châu", url: "https://dantocmiennui.baotintuc.vn/nhip-song-dam-da-o-lang-bien-dien-chau-post1372656.html" },
    { label: "Báo Nghệ An — Ngư dân Diễn Châu vào mùa đánh cá trích", url: "https://baonghean.vn/ngu-dan-dien-chau-vao-mua-danh-ca-trich-10237138.html" },
  ],
  related: ["ngay-hoi-ca-trich", "cua-lach-van", "dien-kim"],
};

HC.crafts["lam-muoi"] = {
  kind: "Nghề truyền thống",
  num: "06",
  title: "Nghề làm muối",
  subtitle: "Diễn Kim — hơn 40 ha đồng muối",
  hero: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_3_anh_le_thang7436264_1852018.jpeg",
  heroAlt: "Đồng muối Diễn Kim",
  lead:
    "Diễn Kim là một trong những vùng làm muối của huyện Diễn Châu với hơn 40 ha và hàng trăm hộ diêm dân. Nghề muối truyền thống đang mai một vì giá muối xuống thấp.",
  facts: [
    ["Địa bàn", "Diễn Kim"],
    ["Diện tích", "hơn 40 ha"],
    ["Lao động", "~700 người"],
    ["Giá muối", "~1.800 đ/kg"],
  ],
  body: [
    {
      h: "Quy trình làm muối",
      p: [
        "Diêm dân múc nước mặn từ kênh dẫn vào bể lọc, qua bể chứa nhỏ, đo độ mặn rồi dẫn vào các ô kết tinh để phơi nắng. Nước bốc hơi dưới nắng hè, để lại những hạt muối trắng kết tinh trên nền ô.",
        "Công việc gắn với nắng nóng và những buổi sớm tinh mơ. Người làm muối phải theo dõi thời tiết, con nước và độ mặn để cho ra hạt muối đạt chất lượng.",
      ],
      img: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_10_anh_le_thang1864264_1852018.jpeg",
      alt: "Đồng muối Diễn Kim",
      cap: "Cánh đồng muối trải dài dưới nắng hè.",
    },
    {
      h: "Mai một vì giá thấp",
      p: [
        "Năm 2014, toàn huyện Diễn Châu có 157 ha đất làm muối; sau đó chỉ còn 4 hợp tác xã tại 3 xã với khoảng 120 ha. Riêng Diễn Kim có hơn 40 ha và khoảng 700 lao động, với hơn 200 hộ làm muối (số liệu 2018).",
        "Giá muối quá thấp (khoảng 1.800 đồng/kg) khiến nhiều cánh đồng bị bỏ hoang, diêm dân bỏ nghề. Đây là thực trạng chung của nghề muối ở nhiều địa phương ven biển.",
      ],
      img: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_8_anh_le_thang1307856_1852018.jpeg",
      alt: "Diêm dân làm muối",
      cap: "Diêm dân làm muối — nghề vất vả đang mai một.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dognf_muoi_7_anh_le_thang6333860_1852018.jpeg", alt: "Đồng muối", cap: "Đồng muối" },
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_trn_dong_muoi_anh_le_thang5149616_1852018.jpeg", alt: "Làm muối", cap: "Làm muối" },
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_2_anh_le_thang4209755_1852018.jpeg", alt: "Đồng muối", cap: "Đồng muối" },
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_muoi_2_anh_le_thang3733417_1852018.jpg", alt: "Hạt muối", cap: "Hạt muối" },
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_6_anh_le_thang3378604_1852018.jpeg", alt: "Cánh đồng muối", cap: "Cánh đồng muối" },
    { src: "https://bna.1cdn.vn/2018/05/18/uploaded-thuyvinhbna-2018_05_18-_bna_dong_muoi_13_anh_le_thang5770257_1852018.jpeg", alt: "Đồng muối", cap: "Đồng muối" },
  ],
  sources: [
    { label: "Báo Nghệ An — Nhọc nhằn trên đồng muối trong ngày nắng đỉnh điểm", url: "https://baonghean.vn/nhoc-nhan-tren-dong-muoi-trong-ngay-nang-dinh-diem-10172808.html" },
    { label: "Báo Nghệ An — Giá quá thấp, diêm dân Nghệ An không mặn mà với vụ muối mới", url: "https://baonghean.vn/gia-qua-thap-diem-dan-nghe-an-khong-man-ma-voi-vu-muoi-moi-10225843.html" },
  ],
  related: ["dien-kim", "nuoc-mam-van-phan", "be-mang-ca-trich"],
};

HC.crafts["nuoc-mam-van-phan"] = {
  kind: "Nghề truyền thống",
  num: "07",
  title: "Nước mắm Vạn Phần",
  subtitle: "Làng Kẻ Vạn — hương vị từ thế kỷ 16–17",
  hero: "https://bna.1cdn.vn/2014/06/30/uploaded-dataimages-201406-original-_images1003446_7c.jpg",
  heroAlt: "Nước mắm Vạn Phần",
  lead:
    "Nước mắm Vạn Phần ở làng Kẻ Vạn (Diễn Vạn) là đặc sản lâu đời của Diễn Châu, xuất hiện từ thế kỷ 16–17. Từng có loại nước mắm đầu nỏ để tiến vua, nay vẫn giữ cách chế biến truyền thống.",
  facts: [
    ["Địa bàn", "Làng Vạn Phần, Diễn Vạn"],
    ["Xuất hiện", "Thế kỷ 16–17"],
    ["Tổ nghề", "Cụ Phạm Kiểng"],
  ],
  body: [
    {
      h: "Thương hiệu lâu đời",
      p: [
        "Làng Vạn Phần (Kẻ Vạn) nằm nơi sông Bùng đổ ra biển (Cửa Vạn). Nghề nước mắm xuất hiện từ thế kỷ 16–17; tổ nghề là cụ Phạm Kiểng (Cụ Bá Hộ). Nơi đây từng có loại nước mắm đầu nỏ để tiến vua, gắn với giai thoại thời vua Khải Định.",
        "Đầu thế kỷ 20, Vạn Phần có tới 60–70 thuyền buôn nước mắm đi khắp cả nước, cho thấy quy mô và danh tiếng của nghề ở vùng đất này.",
      ],
      img: "https://bna.1cdn.vn/2014/06/30/uploaded-dataimages-201406-original-_images1003446_7c.jpg",
      alt: "Nước mắm Vạn Phần",
      cap: "Nước mắm Vạn Phần — đặc sản lâu đời của Diễn Châu.",
    },
    {
      h: "Gìn giữ hương vị",
      p: [
        "Nước mắm Vạn Phần được làm theo cách ủ cá lâu ngày, cho ra vị đậm đà đặc trưng. Hiện nay, Công ty CP Thủy sản Diễn Châu vẫn giữ cách chế biến truyền thống, kết hợp quy trình hiện đại để đưa sản phẩm ra thị trường.",
        "Thương hiệu “Nước mắm Vạn Phần” (thành lập năm 1947) là niềm tự hào của người dân địa phương và là một trong những sản vật nổi tiếng của huyện Diễn Châu.",
      ],
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2014/06/30/uploaded-dataimages-201406-original-_images1003446_7c.jpg", alt: "Nước mắm Vạn Phần", cap: "Nước mắm Vạn Phần" },
  ],
  sources: [
    { label: "Báo Nghệ An — Làng Kẻ Vạn", url: "https://baonghean.vn/lang-ke-van-10062307.html" },
    { label: "Nước mắm Vạn Phần — Giới thiệu", url: "https://www.vanphan.com/pages/about-us" },
  ],
  related: ["dien-kim", "lam-muoi", "be-mang-ca-trich"],
};

HC.crafts["hat-tuong"] = {
  kind: "Nghề truyền thống",
  num: "08",
  title: "Hát tuồng",
  subtitle: "Diễn Mỹ · Diễn Hoàng — “Tuồng Mái Nâu” nức tiếng",
  hero: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201602-original-_images1466367_tuong_dien_chau.jpg",
  heroAlt: "Biểu diễn hát tuồng ở Diễn Châu",
  lead:
    "Hát tuồng là loại hình nghệ thuật truyền thống được người dân Diễn Mỹ và Diễn Hoàng gìn giữ qua nhiều thế hệ. Làng Phú Thọ nổi tiếng với “Tuồng Mái Nâu”, mỗi dịp Tết lại rộn ràng tiếng trống tuồng.",
  facts: [
    ["Địa bàn", "Diễn Mỹ · Diễn Hoàng"],
    ["Nổi tiếng", "“Tuồng Mái Nâu” (Phú Thọ)"],
    ["Đội tuồng Diễn Hoàng", "Thành lập 2004"],
  ],
  body: [
    {
      h: "Tuồng Mái Nâu",
      p: [
        "Làng Phú Thọ (Diễn Mỹ) nổi tiếng khắp vùng gần xa với câu “Tuồng Mái Nâu”. Vào tối mùng 3 Tết, dân làng râm ran kéo nhau đi xem tuồng, sân nhà văn hóa xã chật kín người.",
        "Câu lạc bộ tuồng xã Diễn Mỹ do cụ Hoàng Ngọc Phác làm chủ nhiệm, gìn giữ hàng chục vở tuồng cổ. Các vở thường diễn như “Ngọn lửa Hồng Sơn”, “Trưng Vương đề cờ”, “Mỵ Châu – Trọng Thủy”…",
      ],
      img: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201503-original-_images1143701_tuong_4.jpg",
      alt: "Diễn viên hát tuồng",
      cap: "Diễn viên hát tuồng trong trang phục truyền thống.",
    },
    {
      h: "Đội tuồng Diễn Hoàng",
      p: [
        "Ở Diễn Hoàng, đội tuồng được thành lập năm 2004 do cụ Phan Văn Đỉnh đứng ra lập. Cụ tự bỏ kinh phí ra Hà Nội sưu tầm, mua trang phục, đến nay đội có hơn 20 thành viên.",
        "Toàn huyện Diễn Châu có khoảng 10 đội hát tuồng. Hát tuồng không chỉ là thú vui mà còn là cách người dân lưu giữ lịch sử, đạo lý và tinh thần cộng đồng qua nhiều thế hệ.",
      ],
      img: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201503-original-_images1143702_tuong_5.jpg",
      alt: "Biểu diễn tuồng",
      cap: "Biểu diễn tuồng — món ăn tinh thần mỗi dịp lễ, Tết.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201602-original-_images1466367_tuong_dien_chau.jpg", alt: "Hát tuồng", cap: "Hát tuồng" },
    { src: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201503-original-_images1143701_tuong_4.jpg", alt: "Tuồng", cap: "Tuồng" },
    { src: "https://bna.1cdn.vn/2016/02/22/uploaded-dataimages-201503-original-_images1143702_tuong_5.jpg", alt: "Biểu diễn tuồng", cap: "Biểu diễn tuồng" },
    { src: "http://vanhoanghean.vn/storage/images/2023/Thang2/2.JPG", alt: "Làng tuồng ngày xuân", cap: "Làng tuồng ngày xuân" },
    { src: "http://vanhoanghean.vn/storage/L05V54sqcOKwwtbAoV4wcuvbkwTZ2YvhZ51Vq1ms.jpg", alt: "Hát tuồng", cap: "Hát tuồng" },
    { src: "http://vanhoanghean.vn/storage/Pwtxq9aKYQw9z0TlIoNsgFvMSFFmDY9Fk2yA4z7j.jpg", alt: "Tuồng cổ", cap: "Tuồng cổ" },
    { src: "http://vanhoanghean.vn/storage/kNumJ2adsmIFdAhMuxAF7r0xKo7wEFocMdpfR1zR.jpg", alt: "Biểu diễn tuồng", cap: "Biểu diễn tuồng" },
  ],
  sources: [
    { label: "Báo Nghệ An — Âm vang trống tuồng Phủ Diễn", url: "https://baonghean.vn/am-vang-trong-tuong-phu-dien-10024536.html" },
    { label: "Văn hóa Nghệ An — Làng tuồng ngày xuân", url: "http://vanhoanghean.vn/chi-tiet-tin-tuc/15305-lang-tuong-ngay-xuan" },
  ],
  related: ["dien-my", "dien-hoang", "nghe-moc-dien-my"],
};

HC.crafts["nghe-moc-dien-my"] = {
  kind: "Nghề truyền thống",
  num: "09",
  title: "Nghề mộc Diễn Mỹ",
  subtitle: "Đất Đông Xương — nghề nền của nhiều làng nghề",
  hero: "https://bna.1cdn.vn/2015/08/19/uploaded-dataimages-201508-original-_images1371839_a7_m_t_g_c_khu_n_vi_n_tr__s__x__di_n_m__lu_n_du_c_trang_tr__d_p.jpg",
  heroAlt: "Diễn Mỹ — vùng đất của nghề mộc",
  lead:
    "Diễn Mỹ có nghề mộc truyền thống lâu đời. Nghề mộc không chỉ tạo ra đồ dùng gia đình mà còn là nghề nền giúp người thợ biết ghép dăm, dựng kết cấu — tiền đề cho nhiều nghề thủ công khác trong vùng.",
  facts: [
    ["Địa bàn", "Diễn Mỹ (Đông Xương)"],
    ["Đặc điểm", "Nghề thủ công truyền thống"],
    ["Liên quan", "Nghề đóng cối xay"],
  ],
  body: [
    {
      h: "Nghề mộc của làng quê",
      p: [
        "Nghề mộc ở Diễn Mỹ được giới thiệu trong chuyên mục “Quê mình xứ Nghệ: Nghề mộc ở Diễn Mỹ – Diễn Châu”. Người thợ mộc làm nhà, đóng đồ gỗ, dựng kết cấu công trình và các vật dụng phục vụ đời sống nông nghiệp.",
        "Kỹ thuật ghép dăm, dựng khung, chạm trổ của nghề mộc cũng là nền tảng để người dân trong vùng phát triển các nghề liên quan như đóng cối xay ở làng Đông Xương hay làm trống da ở Hoàng Hà.",
      ],
      img: "https://bna.1cdn.vn/2015/08/19/uploaded-dataimages-201508-original-_images1371841_ti_p_a7__thu_ho_ch_l_c___di_n_m_.jpg",
      alt: "Thu hoạch lạc ở Diễn Mỹ",
      cap: "Diễn Mỹ — miền quê thuần nông gắn với các nghề thủ công.",
    },
    {
      h: "Gắn với đời sống nông nghiệp",
      p: [
        "Nghề mộc phục vụ trực tiếp đời sống nông nghiệp: làm cày, bừa, cối xay, đồ gia dụng… Sản phẩm của nghề mộc theo chân người dân ra đồng, vào nhà, gắn bó với nhịp sống làng quê.",
        "Ngày nay, dù nhiều nghề thủ công đã mai một, nghề mộc vẫn còn được duy trì ở một số hộ, góp phần giữ gìn kỹ thuật và bản sắc làng nghề của Diễn Mỹ.",
      ],
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2015/08/19/uploaded-dataimages-201508-original-_images1371839_a7_m_t_g_c_khu_n_vi_n_tr__s__x__di_n_m__lu_n_du_c_trang_tr__d_p.jpg", alt: "Diễn Mỹ", cap: "Diễn Mỹ" },
    { src: "https://bna.1cdn.vn/2015/08/19/uploaded-dataimages-201508-original-_images1371841_ti_p_a7__thu_ho_ch_l_c___di_n_m_.jpg", alt: "Thu hoạch lạc", cap: "Thu hoạch lạc" },
  ],
  sources: [
    { label: "Truyền hình Nghệ An — Quê mình xứ Nghệ: Nghề mộc ở Diễn Mỹ", url: "https://truyenhinhnghean.vn/media/san-choi/que-minh-xu-nghe/201903/que-minh-xu-nghe-nghe-moc-o-dien-my-dien-chau-a205bf7/" },
    { label: "Wikipedia — Diễn Châu (huyện)", url: "https://vi.wikipedia.org/wiki/Di%E1%BB%85n_Ch%C3%A2u_(huy%E1%BB%87n)" },
  ],
  related: ["dien-my", "hat-tuong", "trong-hoang-ha"],
};

HC.crafts["ben-vong"] = {
  kind: "Nghề truyền thống",
  num: "10",
  title: "Bện võng",
  subtitle: "Nghề cũ của vùng Diễn Châu — làng Hoàng La",
  hero: "https://bna.1cdn.vn/2019/12/07/uploaded-thuhuyenbna-2019_12_07-_bna_anhmaigiang118404449_7122019.jpg",
  heroAlt: "Đan võng — nghề thủ công truyền thống ở Diễn Châu",
  lead:
    "Bện (đan) võng là một trong những nghề thủ công lâu đời của vùng Diễn Châu, từng gắn với làng Hoàng La. Võng đan từ sợi gai, sợi đay se tay là vật dụng quen thuộc trong mỗi gia đình xứ Nghệ.",
  facts: [
    ["Địa bàn", "Làng Hoàng La (Diễn Hoàng)"],
    ["Nghề", "Bện / đan võng"],
    ["Nguyên liệu", "Gai, đay, dây dù"],
    ["Tình trạng", "Đã mai một"],
  ],
  body: [
    {
      h: "Nghề cũ ven sông Bùng",
      p: [
        "Trong danh mục làng nghề truyền thống của huyện Diễn Châu, bện võng được ghi gắn với làng Hoàng La. Đây là một trong nhóm nghề phụ như đan bị, đan rổ rá, dệt vải… giúp người dân ven sông Bùng có thêm thu nhập lúc nông nhàn.",
        "Võng được đan từ sợi gai, sợi đay se tay, về sau thay bằng dây dù. Người thợ đan thành những tấm lưới mắt cáo, luồn dây vào khung gỗ rồi mắc hai đầu lên cột nhà hay gốc cây để nằm nghỉ — hình ảnh thân thuộc của làng quê xứ Nghệ.",
      ],
      img: "https://bna.1cdn.vn/2019/12/07/uploaded-thuhuyenbna-2019_12_07-_bna_anhmaigiang118404449_7122019.jpg",
      alt: "Đan võng ở Diễn Châu",
      cap: "Đan võng — nghề thủ công truyền thống của vùng Diễn Châu (ảnh: Báo Nghệ An).",
    },
    {
      h: "Câu chuyện mai một",
      p: [
        "Theo bài viết của Báo Nghệ An cuối năm 2019, nhiều làng nghề ở Diễn Châu hoạt động cầm chừng, kém hiệu quả và bị thu hồi, hủy bỏ danh hiệu. Trong đó, nghề đan võng ở làng Phú Hậu (xã Diễn Tân) được nêu là đã mai một rõ rệt.",
        "Ngày nay, võng sản xuất công nghiệp bán sẵn, giá rẻ khiến người dân bỏ dần nghề đan võng tại chỗ. Dù vậy, những chiếc võng đan tay vẫn là ký ức thân thuộc — nơi buổi trưa hè cả nhà quây quần bên chiếc võng mắc dưới hiên.",
      ],
      img: "https://bna.1cdn.vn/2019/12/07/uploaded-thuhuyenbna-2019_12_07-_bna_image_9347752_7122019.jpg",
      alt: "Đan lát mây tre ở Diễn Châu",
      cap: "Đan lát mây tre — nhóm nghề thủ công cùng thời với bện võng ở Diễn Châu.",
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2019/12/07/uploaded-thuhuyenbna-2019_12_07-_bna_anhmaigiang118404449_7122019.jpg", alt: "Đan võng", cap: "Đan võng" },
    { src: "https://bna.1cdn.vn/2019/12/07/uploaded-thuhuyenbna-2019_12_07-_bna_image_9347752_7122019.jpg", alt: "Đan lát mây tre", cap: "Đan lát mây tre" },
  ],
  sources: [
    { label: "Wikipedia — Diễn Châu (huyện), mục Làng nghề", url: "https://vi.wikipedia.org/wiki/Di%E1%BB%85n_Ch%C3%A2u_(huy%E1%BB%87n)" },
    { label: "Báo Nghệ An — Nhiều làng nghề ở Diễn Châu (Nghệ An) bị rút danh hiệu", url: "https://baonghean.vn/nhieu-lang-nghe-o-dien-chau-nghe-an-bi-rut-danh-hieu-10207650.html" },
  ],
  related: ["dien-hoang", "trong-hoang-ha", "hat-tuong"],
};

HC.crafts["nuoi-huou"] = {
  kind: "Nghề truyền thống",
  num: "11",
  title: "Nuôi hươu lấy nhung",
  subtitle: "Diễn Hùng — “thủ phủ” hươu của Nghệ An",
  hero: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai1_20230610181026.jpg",
  heroAlt: "Trang trại nuôi hươu ở Diễn Hùng",
  lead:
    "Nuôi hươu lấy lộc nhung là hướng chuyển đổi mới nổi nhưng phát triển mạnh ở Diễn Hùng (nay thuộc xã Hải Châu). Đây được xem là “thủ phủ” nuôi hươu của Nghệ An với tổng đàn lớn nhất huyện Diễn Châu.",
  facts: [
    ["Địa bàn", "Diễn Hùng (Hải Châu)"],
    ["Tổng đàn (2023)", "~1.600 con"],
    ["Số hộ nuôi", "~140 hộ"],
    ["Sản phẩm", "Lộc nhung, con giống"],
  ],
  body: [
    {
      h: "Từ vài hộ đến “thủ phủ” hươu",
      p: [
        "Nuôi hươu ở Diễn Hùng không phải nghề cổ truyền lâu đời mà là hướng chuyển đổi mới. Khi chăn nuôi lợn, bò gặp khó vì giá giảm mạnh và dịch bệnh, người dân Diễn Hùng chuyển sang nuôi hươu sinh sản và lấy lộc nhung.",
        "Từ vài ba hộ ban đầu, đến năm 2023 Diễn Hùng có gần 1.600 con hươu với khoảng 140 hộ nuôi — tổng đàn lớn nhất huyện Diễn Châu. Sáu tháng đầu năm 2023, trong 18 tỷ đồng thu từ chăn nuôi của xã, riêng nuôi hươu đã chiếm 13 tỷ.",
      ],
      img: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai2_20230610181026.jpg",
      alt: "Đàn hươu ở Diễn Hùng",
      cap: "Diễn Hùng được thương lái đánh giá là địa bàn có chất lượng lộc hươu tốt ở Nghệ An.",
    },
    {
      h: "Giá trị từ lộc nhung",
      p: [
        "Hươu được nuôi chủ yếu để lấy lộc nhung (mỗi năm cắt 2 lần) và bán con giống. Nhung hươu Diễn Hùng được thương lái đánh giá cao về chất lượng; có cặp nhung hơn 3,3 kg bán tại chỗ tới 65 triệu đồng.",
        "Anh Trần Quang Huấn (thôn Hùng Nghĩa) với đàn 20 con thu về khoảng 500 triệu đồng mỗi năm, trừ chi phí còn lãi 400 triệu. Ông Nguyễn Duy Tân (thôn Ngọc Mỹ) có đàn 30 con, mỗi năm thu 25–30 kg lộc nhung và bán khoảng 10 con giống.",
        "Hươu dễ nuôi, thức ăn là cỏ voi, lá cây, rau khoai, thân ngô non, chuối… Xã Diễn Hùng đang vận động thành lập hiệp hội nuôi hươu và đăng ký sản phẩm OCOP nhung hươu của địa phương.",
      ],
      img: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai4_20230610181026.jpg",
      alt: "Cặp nhung hươu",
      cap: "Cặp nhung hươu hơn 3,3 kg được thương lái thu mua tới 65 triệu đồng.",
    },
  ],
  gallery: [
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai1_20230610181026.jpg", alt: "Trang trại hươu", cap: "Trang trại hươu" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai2_20230610181026.jpg", alt: "Đàn hươu", cap: "Đàn hươu" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai3_20230610181026.jpg", alt: "Nuôi hươu ở Diễn Hùng", cap: "Nuôi hươu ở Diễn Hùng" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/062023/nai4_20230610181026.jpg", alt: "Nhung hươu", cap: "Nhung hươu" },
    { src: "https://sinhthainongnghiep.net.vn/uploads/2024/06/mo-hinh-nuoi-huou-lay-nhung-1-1024x681.jpg", alt: "Mô hình nuôi hươu lấy nhung", cap: "Mô hình nuôi hươu lấy nhung" },
    { src: "https://sinhthainongnghiep.net.vn/uploads/2024/06/mo-hinh-nuoi-huou-lay-nhung-2-1024x768.jpg", alt: "Chuồng nuôi hươu", cap: "Chuồng nuôi hươu" },
  ],
  sources: [
    { label: "Truyền hình Nghệ An — Nông dân Diễn Hùng giàu lên nhờ nghề nuôi hươu", url: "https://truyenhinhnghean.vn/kinh-te/202306/nong-dan-dien-hung-giau-len-nho-nghe-nuoi-huou-f130ab2" },
    { label: "Sinh thái Nông nghiệp — Xã Diễn Hùng làm giàu từ nghề nuôi hươu lấy nhung", url: "https://sinhthainongnghiep.net.vn/xa-dien-hung-lam-giau-tu-nghe-nuoi-huou-lay-nhung-a29970.html" },
  ],
  related: ["dien-hung", "nuoi-tom-cnc", "be-mang-ca-trich"],
};

HC.crafts["banh-muot"] = {
  kind: "Nghề truyền thống",
  num: "12",
  title: "Bánh mướt Phủ Diễn",
  subtitle: "Đặc sản xứ Diễn Châu — “chợ Chùa bánh mướt với hành”",
  hero: "https://visitnghean.gov.vn/backend/public/blogs/693a35057579e.jpg",
  heroAlt: "Bánh mướt Diễn Châu",
  lead:
    "Bánh mướt (bánh ướt) là món ăn dân dã làm từ gạo tẻ, nổi tiếng khắp xứ Nghệ và gắn với đất Phủ Diễn (Diễn Châu). Những tấm bánh trắng mỏng, mềm, ăn kèm nước mắm, hành phi, chả, giò… là hồn cốt bữa ăn của người dân nơi đây.",
  facts: [
    ["Địa bàn", "Phủ Diễn (Diễn Châu)"],
    ["Nguyên liệu", "Gạo tẻ (gạo Vê)"],
    ["Cách làm", "Tráng mỏng, hấp chín"],
    ["Ăn kèm", "Nước mắm, hành phi, chả"],
  ],
  body: [
    {
      h: "Món quà của gạo Vê",
      p: [
        "Bánh mướt làm từ gạo tẻ ngâm mềm, xay nhuyễn thành bột nước rồi tráng mỏng, hấp chín trên nồi hơi. Gạo ngon nhất để làm bánh là gạo Vê — loại gạo cho bánh trắng, dai và thơm.",
        "Bánh chín được cuộn lại hoặc xếp lớp, ăn kèm nước mắm, hành phi, chả, giò, nem rán, xáo lòng… Món ăn bình dị nhưng là “linh hồn” của bữa sáng và những dịp giỗ, Tết ở Phủ Diễn.",
      ],
      img: "https://toplistnghean.vn/storage/media/banh-muot-nghe-an-toplistnghean1.jpg",
      alt: "Bánh mướt Diễn Châu",
      cap: "Tấm bánh mướt trắng mỏng, mềm — đặc sản xứ Diễn Châu.",
    },
    {
      h: "Thương hiệu Phủ Diễn",
      p: [
        "Bánh mướt gắn với đất Phủ Diễn (Diễn Châu) từ lâu đời, từng đi vào thơ vè dân gian: “Chợ Chùa bánh mướt với hành”. Từ Diễn Châu, bánh mướt theo chân người xứ Nghệ đi khắp muôn nơi.",
        "Nghề tráng bánh mướt còn được nhiều gia đình, cơ sở trong vùng duy trì, vừa bán tại chỗ vừa cung cấp cho các quán ăn, chợ quê — góp phần giữ hồn cốt ẩm thực của đất Diễn Châu.",
      ],
      img: "https://toplistnghean.vn/storage/media/banh-muot-nghe-an-toplistnghean4.jpg",
      alt: "Bánh mướt ăn kèm",
      cap: "Bánh mướt ăn kèm hành phi, nước mắm — món ăn dân dã của người xứ Nghệ.",
    },
  ],
  gallery: [
    { src: "https://visitnghean.gov.vn/backend/public/blogs/693a35057579e.jpg", alt: "Bánh mướt Diễn Châu", cap: "Bánh mướt Diễn Châu" },
    { src: "https://toplistnghean.vn/storage/media/banh-muot-nghe-an-toplistnghean1.jpg", alt: "Bánh mướt", cap: "Bánh mướt" },
    { src: "https://toplistnghean.vn/storage/media/banh-muot-nghe-an-toplistnghean3.jpg", alt: "Tráng bánh mướt", cap: "Tráng bánh mướt" },
    { src: "https://toplistnghean.vn/storage/media/banh-muot-nghe-an-toplistnghean4.jpg", alt: "Bánh mướt ăn kèm", cap: "Bánh mướt ăn kèm" },
    { src: "https://toplistnghean.vn/storage/media/banh-muot-nghe-an-toplistnghean6.jpg", alt: "Bánh mướt Phủ Diễn", cap: "Bánh mướt Phủ Diễn" },
    { src: "https://tapchisonglam.vn/wp-content/uploads/2021/11/banh-muot-phu-dien-2.png", alt: "Bánh mướt Phủ Diễn", cap: "Bánh mướt Phủ Diễn" },
  ],
  sources: [
    { label: "Sở VH,TT&DL Nghệ An — Đặc sản Nghệ An: Bánh mướt Diễn Châu", url: "https://visitnghean.gov.vn/tin-tuc/dac-san-nghe-an-banh-muot-dien-chau-ngon-khong-cuong" },
    { label: "Tạp chí Sông Lam — Xứ Phủ Diễn, bánh mướt và chợ", url: "https://tapchisonglam.vn/xu-phu-dien-banh-muot-va-cho/" },
    { label: "Toplist Nghệ An — Bánh mướt Nghệ An", url: "https://toplistnghean.vn/dac-san/banh-muot-nghe-an" },
  ],
  related: ["dien-my", "dien-kim", "nuoc-mam-van-phan"],
};

/* ---------- 5. ẨM THỰC ---------- */
HC.foods["ca-trich-nuong"] = {
  kind: "Ẩm thực",
  num: "01",
  title: "Cá trích nướng",
  subtitle: "Món ăn “gây sốt” ở vùng biển Hải Châu",
  hero: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/032026/bna_1_20260323152901.jpg",
  heroAlt: "Cá trích nướng than hồng trên bãi biển",
  lead:
    "Cá trích nướng là món ăn dân dã của ngư dân vùng biển Diễn Châu, bất ngờ “gây sốt” trên mạng xã hội và thu hút đông đảo du khách tìm về bãi biển Hải Châu trải nghiệm.",
  facts: [
    ["Địa bàn", "Bãi biển Diễn Kim · Hải Châu"],
    ["Cách chế biến", "Nướng than hồng ngay trên bãi"],
    ["Ăn kèm", "Rau sống, bún, bánh tráng"],
    ["Nước chấm", "Nước mắm ớt cay nồng"],
  ],
  body: [
    {
      h: "Từ món của nhà nghèo đến “cơn sốt”",
      p: [
        "Cá trích là loài cá biển giàu omega-3 và chất dinh dưỡng, xưa kia từng được xem là món ăn của nhà nghèo. Vào mùa, ngư dân Diễn Châu đánh bắt hàng tấn cá mỗi ngày; cá trích xứ Nghệ được khách hàng đánh giá là béo và thơm ngon.",
        "Những ngày gần đây, món cá trích nướng tại xã ven biển Hải Châu bất ngờ nổi tiếng trên mạng xã hội. Người dân và du khách kéo nhau ra bãi biển, ngồi quanh bếp than hồng để thưởng thức cá trích vừa mua của ngư dân.",
      ],
      img: "https://bna.1cdn.vn/2026/04/05/bna_ca-2-c23816c0eb10d18103a6fbc52850751e.jpg",
      alt: "Cá trích nướng tại bãi biển Hải Châu",
      cap: "Du khách quây quần bên bếp than nướng cá trích trên bãi biển.",
    },
    {
      h: "Cách thưởng thức",
      p: [
        "Cá trích tươi được làm sạch, ướp sơ rồi nướng trên than hồng đến khi da vàng, thơm lừng. Khi ăn, thực khách chỉ cần cuốn cá cùng rau sống, bún, bánh tráng và chấm nước mắm ớt cay nồng là đã tròn vị.",
        "Vì cá vừa lên bờ, không qua ướp đá nên giữ nguyên vị tươi ngọt. Đây cũng là lý do món cá trích nướng ở Hải Châu được du khách truyền tai nhau tìm đến.",
      ],
      img: "https://i.ex-cdn.com/danviet.vn/files/content/2026/03/25/4-235444.jpg",
      alt: "Cá trích nướng ăn kèm rau sống và bánh tráng",
      cap: "Cá trích nướng cuốn rau sống, bánh tráng, chấm nước mắm ớt.",
    },
  ],
  gallery: [
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/032026/bna_1_20260323152901.jpg", alt: "Cá trích nướng than hồng", cap: "Cá trích nướng than hồng" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/032026/bna_5_20260323152901.jpg", alt: "Thực khách thưởng thức cá trích nướng", cap: "Thực khách thưởng thức cá trích nướng" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/032026/bna_7_20260323152901.jpg", alt: "Cá trích nướng trên bãi biển", cap: "Cá trích nướng trên bãi biển" },
    { src: "https://i.ex-cdn.com/danviet.vn/files/content/2026/03/25/1-235442.jpg", alt: "Cá trích nướng", cap: "Cá trích nướng" },
    { src: "https://i.ex-cdn.com/danviet.vn/files/content/2026/03/25/2-235443.jpg", alt: "Món cá trích nướng", cap: "Món cá trích nướng" },
    { src: "https://bna.1cdn.vn/2025/02/27/bna_ca-trich.jpg", alt: "Cá trích vừa đánh bắt", cap: "Cá trích vừa đánh bắt" },
  ],
  sources: [
    { label: "Truyền hình Nghệ An — Cá trích nướng Nghệ An bất ngờ “gây sốt” mạng xã hội", url: "https://truyenhinhnghean.vn/doi-song-xa-hoi/202603/ca-trich-nuong-nghe-an-bat-ngo-gay-sot-mang-xa-hoi-dong-dao-thuc-khach-tim-den-trai-nghiem-ae82776/" },
    { label: "Dân Việt — Bất ngờ một món đặc sản từ một loài cá đem nướng thơm lừng", url: "https://danviet.vn/bat-ngo-mot-mon-dac-san-tu-mot-loai-ca-dem-nuong-thom-lung-tro-nen-noi-tieng-tren-mang-xa-hoi-o-nghe-an-d1413231.html" },
    { label: "Báo Nghệ An — Đánh bắt cá trích đầu mùa, ngư dân Diễn Châu mỗi sáng thu tiền triệu", url: "https://baonghean.vn/danh-bat-ca-trich-dau-mua-ngu-dan-dien-chau-moi-sang-thu-tien-trieu-10292042.html" },
  ],
  related: ["ngay-hoi-ca-trich", "be-mang-ca-trich", "ca-chao"],
};

HC.foods["ca-chao"] = {
  kind: "Ẩm thực",
  num: "02",
  title: "Cá cháo biển",
  subtitle: "Đặc sản mùa Đông của vùng biển Diễn Châu",
  hero: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/4_20251226153231.jpg",
  heroAlt: "Cá cháo tươi vừa được đưa vào bờ",
  lead:
    "Cá cháo (còn gọi là cá khoai) là loài cá thân mềm, thịt ngọt, được xem là đặc sản mùa Đông của vùng biển Diễn Châu. Cá vừa lên bờ, không qua ướp đá nên giữ nguyên vị tươi.",
  facts: [
    ["Tên gọi khác", "Cá khoai"],
    ["Ngư trường", "Lộng, gần bờ"],
    ["Mùa chính", "Mùa Đông"],
    ["Giá cá tươi", "120.000 – 250.000 đ/kg"],
  ],
  body: [
    {
      h: "Loài cá của “miền chân sóng”",
      p: [
        "Cá cháo là loài cá thân mềm, thịt trắng, ngọt và ít xương dăm, sống ở vùng nước có độ sâu vừa phải. Tại vùng biển Diễn Châu, cá cháo được khai thác ở ngư trường lộng; thuyền đi và về trong ngày nên cá luôn tươi.",
        "Cá cháo có mặt ở nhiều vùng biển, nhưng cá cháo đánh bắt ở vùng biển Nghệ An – Hà Tĩnh – Thanh Hóa được giới ẩm thực xếp vào loại ngon, nhờ nước biển có độ mặn vừa và nhiều dòng hải lưu mang phù du tạo thức ăn cho cá.",
      ],
      img: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/2_20251226153231.jpg",
      alt: "Cá cháo vừa đánh bắt tại vùng biển Diễn Châu",
      cap: "Cá cháo vừa lên bờ, bán ngay cho tiểu thương.",
    },
    {
      h: "Món ngon ngày lạnh",
      p: [
        "Cá cháo thường được nấu canh — món ăn nóng hổi, ngọt vị, rất hợp những ngày trở lạnh. Ngoài ra cá còn được kho, hấp hoặc chiên.",
        "Vào mùa, cá cháo được tiểu thương bày bán ở các chợ dân sinh trong huyện Diễn Châu. Mỗi chuyến biển trúng mùa cho ngư dân thu nhập khá, có hôm lãi tiền triệu.",
      ],
      img: "https://media3.baotintuc.vn/images/JQoPFRNPPTA1Y0eS_o1V73xLObA35UsQEvXOIcHoEi0lH5VH7shX0T0vUrRJGL2ksS4ohs8S2dLn5NwSac8AKicygR7wwM5bzhmsT_-PdQQgTsmmNo4ga2wwIJnCHN2RS0iV952QuKvAUXerI6KHzucpWrU25i2I_ndB_7q-R9-WyVRR1GMme-KxJb3sbVc0nO-i9BypSWKPeW2B8nGbpA/vna-vna-potal-canh-ca-chao-mon-an-dac-trung-cua-nguoi-dan-xu-bien-dien-chau-nghe-an-7703259-801.jpg.webp",
      alt: "Canh cá cháo — món ăn đặc trưng của người dân xứ biển Diễn Châu",
      cap: "Canh cá cháo — món ăn đặc trưng của người dân xứ biển Diễn Châu.",
    },
  ],
  gallery: [
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/1_20251226153232.jpg", alt: "Cá cháo vừa cập bờ", cap: "Cá cháo vừa cập bờ" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/3_20251226153231.jpg", alt: "Cá cháo", cap: "Cá cháo tươi" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/5_20251226153231.jpg", alt: "Cá cháo bán tại chợ", cap: "Cá cháo bán tại chợ dân sinh" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/6_20251226153231.jpg", alt: "Ngư dân bên cá cháo", cap: "Ngư dân bên mẻ cá cháo" },
    { src: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/122025/7_20251226153231.jpg", alt: "Cá cháo mùa Đông", cap: "Cá cháo mùa Đông" },
  ],
  sources: [
    { label: "Truyền hình Nghệ An — Ngư dân Nghệ An vào mùa đánh bắt cá cháo", url: "https://truyenhinhnghean.vn/kinh-te/202512/ngu-dan-nghe-an-vao-mua-danh-bat-ca-chao-a653a36/" },
    { label: "Dân tộc & Miền núi — Hương vị canh cá cháo độc đáo “miền chân sóng”", url: "https://dantocmiennui.baotintuc.vn/huong-vi-canh-ca-chao-doc-dao-mien-chan-song-post1375637.html" },
  ],
  related: ["ca-trich-nuong", "be-mang-ca-trich", "oc-cuom"],
};

HC.foods["oc-cuom"] = {
  kind: "Ẩm thực",
  num: "03",
  title: "Ốc cườm",
  subtitle: "Món quà vặt mùa xuân của người miền biển",
  hero: "https://bna.1cdn.vn/2019/07/31/uploaded-xuanhoangbna-2019_07_31-_bna_anh_13377919_3172019.jpg",
  heroAlt: "Ngư dân cào bắt ốc cườm trên bãi biển",
  lead:
    "Ốc cườm (còn gọi ốc gạo, ốc lễ) chỉ nhỏ bằng chiếc cúc áo, đủ sắc màu, xuất hiện nhiều nhất vào mùa xuân. Ngư dân miền biển cào ốc khi thủy triều xuống, mỗi ngày có thể thu tiền triệu.",
  facts: [
    ["Tên gọi khác", "Ốc gạo · ốc lễ"],
    ["Kích cỡ", "Nhỏ như cúc áo"],
    ["Mùa chính", "Tháng Chạp – tháng 3 âm lịch"],
    ["Giá", "7.000 – 10.000 đ/kg"],
  ],
  body: [
    {
      h: "Nghề cào ốc trên bãi triều",
      p: [
        "Ốc cườm sống trong lớp cát mịn vùng bãi triều. Khi thủy triều xuống khoảng hai phần ba bãi, ngư dân mang dụng cụ tự chế — khung thép hình chữ nhật gắn túi lưới dài 3–4 m — vừa đi thụt lùi vừa cào xuống lớp cát, ốc theo đó lọt vào lưới.",
        "Có ngày một nhóm ngư dân cào được 3–5 tạ ốc, thu về tiền triệu; bình quân mỗi người 500.000–700.000 đồng mỗi ngày.",
      ],
      img: "https://bna.1cdn.vn/2019/07/31/uploaded-xuanhoangbna-2019_07_31-_bna_anh_21700226_3172019.jpg",
      alt: "Ngư dân cào ốc cườm trên bãi biển",
      cap: "Ngư dân đi thụt lùi, cào từng lớp cát để bắt ốc cườm.",
    },
    {
      h: "Món ăn mùa hè",
      p: [
        "Ốc cườm sau khi rửa sạch được hấp gừng với lá chanh, đãi lấy ruột rồi rang sả ớt hoặc xào mắm gừng, ăn kèm bánh đá — món nhậu dân dã rất được ưa vào mùa hè.",
        "Sản phẩm đánh bắt được nhập cho các đầu mối lớn ở thành phố Vinh và các tỉnh lân cận, góp thêm thu nhập cho ngư dân ven biển ngoài vụ cá chính.",
        "Xin lưu ý: ốc cườm là món quà vặt mùa xuân của cả vùng ven biển Nghệ An, không phải đặc sản riêng của Hải Châu. Nghề cào ốc phổ biến ở nhiều bãi biển trong tỉnh; mục này giới thiệu như một nét ẩm thực chung của miền biển.",
      ],
    },
  ],
  gallery: [
    { src: "https://bna.1cdn.vn/2019/07/31/uploaded-xuanhoangbna-2019_07_31-_bna_anh_13377919_3172019.jpg", alt: "Cào ốc cườm", cap: "Cào ốc cườm trên bãi triều" },
    { src: "https://bna.1cdn.vn/2019/07/31/uploaded-xuanhoangbna-2019_07_31-_bna_anh_36632370_3172019.jpg", alt: "Ốc cườm", cap: "Ốc cườm nhỏ như cúc áo" },
    { src: "https://bna.1cdn.vn/2019/07/31/uploaded-xuanhoangbna-2019_07_31-_bna_anh_69219792_3172019.jpg", alt: "Ốc cườm đãi lấy ruột", cap: "Ốc cườm đãi lấy ruột" },
    { src: "https://bna.1cdn.vn/2019/07/31/uploaded-xuanhoangbna-2019_07_31-_bna_anh_41955512_3172019.jpg", alt: "Món ốc cườm", cap: "Ốc cườm chế biến món ăn" },
  ],
  sources: [
    { label: "Báo Nghệ An — Ngư dân Nghệ An “lọc” cát biển bắt ốc cườm thu tiền triệu mỗi ngày", url: "https://baonghean.vn/ngu-dan-nghe-an-loc-cat-bien-bat-oc-cuom-thu-tien-trieu-moi-ngay-10202266.html" },
    { label: "Công Luận — Ngư dân đạp sóng biển, đi giật lùi bắt ốc tí hon kiếm tiền triệu", url: "https://congluan.vn/ngu-dan-dap-song-bien-di-giat-lui-bat-oc-ti-hon-kiem-tien-trieu-post349245.html" },
  ],
  related: ["ca-chao", "cua-lach-van", "be-mang-ca-trich"],
};

/*__END__*/
