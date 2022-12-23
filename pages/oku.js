import { Container, Typography } from "@mui/material"
import Layout from "../components/Layout"

const oku = () => {
    return (
        <Layout noBanner>
            <Container sx={{ py: 4 }}>
                <Typography variant="h6" mt={3} fontWeight="bold">FıratTech Nedir?</Typography>
                <Typography variant="body1" >FıratTech fırat üniversitesi yazılım mühendisliği
                    öğrencilerine özel; staj, işyeri ve iş ilanların bulunduğu
                    bir web sitesidir. Açık kaynak kodlu bir projedir. Projeye
                    katkıda bulunmak isteyenlerin firat.tech.ogrenci@firat.edu.tr
                    adresine mail atabilirler.</Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">FıratTech'in Gelir Kaynağı Nedir?</Typography>
                <Typography variant="body1" >Kâr amacı gütmeyen bir projedir.</Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">FıratTech'te yayınlanan ilanlara kimler başvurabilir?</Typography>
                <Typography variant="body1" >Türkiye Cumhuriyeti vatandaşı olup Fırat Üniversitesi'nde öğrenci olan herkes başvurabilir.
                </Typography>


                <Typography variant="h6" mt={3} fontWeight="bold">Başvuru Süreci Nasıl İşliyor?</Typography>
                <Typography variant="body1" >Google form üzerinden iletmiş olduğunuz başvurular
                    ilgili şirkete iletilmeden önce tarafımızca titizlikle incelenecek olup hiçbir değişiklik yapılmadan
                    doğrudan ilgili şirkete iletilecektir.
                    <strong>
                        (Black List'de bulunan öğrencilerin yaptıkları başvurular ilgili şirketlere iletilmeyecektir.)
                    </strong>

                </Typography>



                <Typography variant="h6" mt={3} fontWeight="bold">Başvurduğum Şirketler Geri Dönüş Sağlamıyor Ne Yapmalıyım?</Typography>
                <Typography variant="body1" >
                    Başvurduğu ilana 10 iş günü içerinde olumlu/olumsuz geri dönüş alamayan öğrenciler konu başlığına "NO RESPONSE"
                    yazarak firat.tech.ogrenci@firat.edu.tr adresine başvurduğu ilanının linki ile beraber mail göndermelidir.
                    Bize ulaşan mailiniz sonucunda ilgili şirket ile irtibata geçilip en kısa sürede cevap vermesi talep edilecektir.
                    Bize gönderdiğiniz "NO RESPONSE" konulu mail sonrasında ilgili şirket size 5 iş günü içerisinde bir geri dönüş sağlamamazsa aynı mail adresine tekrardan
                    konu kısmına "NO RESPONSE AGAIN" yazarak ve mailin içeriğine başvurduğunuz ilanın linkini koyarak göndermeniz gerekmektedir.
                    "NO RESPONSE AGAIN" konu başlıklı mailler titizlikle incelenecek olup 15 iş günü içerisinde geri dönüş sağlamadığı
                    tespit edilen şirketlerin mevcut tüm ilanları kaldırılacak olup 1 yıl 1 ay süresi boyunca yeniden ilan yayınlamasına
                    izin verilmeyecektir.
                </Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">Başvuru Sırasında Paylaşmış Olduğum Kişisel Bilgilerimi İşliyor Musunuz?</Typography>
                <Typography variant="body1" >Hayır.</Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">İlan Yayınlayan Şirkete Kendim de Mail Göndererek Veya Doğrudan Ofislerine Giderek Başvuru Yapamaz mıyım?</Typography>
                <Typography variant="body1" >Yapabilirsin. Kabul edilirsen kariyerinde başarılar.
                    Amacımız sana FıratTech'i kullandırtmak değil. Sana staj,işyeri ve iş sağlayabilmek.
                    İlanlar her zaman yayınlanmaya devam etsin diyorsan FıratTech üzerinden başvuru yapmanı tavsiye ediyoruz.</Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">Black List Nedir?</Typography>
                <Typography variant="body1" component="div" >Black List, herhangi bir şekilde başvuru süreçlerini suistimâl ettiği
                    anlaşılan öğrencilerin bulunduğu ve hiçbir zaman o listeden isimlerini sildiremedikleri bir "kara liste"dir. Örneğin
                    <ul>
                        <li>"NO RESPONSE" VE "NO RESPONSE AGAIN" konulu gönderilen maillerin
                            belirtilen bekleme süresini beklemeden gönderdiği anlaşılanlar,</li>
                        <li>Konu kısmını belirtilen şekillerde yazmayıp bunu 3 kere tekrar edenler,</li>
                    </ul>

                </Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">Black List'e düştüm. Başvuru yapamıyorum. Başvuruyu yayınlayan şirketi öğrendim
                    şimdi gidip kendim başvuru yapamaz mıyım?</Typography>
                <Typography variant="body1" >Denemesi bedava...</Typography>

                <Typography variant="h6" mt={3} fontWeight="bold">Black List'e düştüm. İsmimi Nasıl Sildirebilirim?</Typography>
                <Typography variant="body1" >Sildiremezsin.</Typography>

            </Container>
        </Layout>

    )
}

export default oku
