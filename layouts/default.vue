<script>
    import "../pages/style.css"
</script>

<template>
    <Head>
        <Title>Floppa.host — Home</Title>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <Link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
    </Head>
    <Header></Header>
    <main>
        <slot></slot>
    </main>
</template>