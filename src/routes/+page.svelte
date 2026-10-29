<script lang="ts">
    import { generate_items } from "#lib/utils.ts";
    import type { ItemCard } from "#lib/types.ts";

    let items: ItemCard[] = generate_items();
</script>

<div class="card-grid">
    {#each items as item}
        <div class="card">
            <img src={item.images[0]} alt={item.name} class="img" />
            <div class="body">
                <h3 class="title">{item.name}</h3>
                <p class="price">${item.price}</p>
                <p class="seller">
                    {#if item.seller.is_verified}<span class="verified">✓</span
                        >{/if}

                    {item.seller.name}
                </p>
                <span class="condition">{item.condition}</span>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1rem;
        padding: 1rem;

        .card {
            background: #eee;
            border: 1px solid #555;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            flex-direction: column;

            .img {
                width: 100%;
                height: 180px;
                object-fit: cover;
            }

            .body {
                padding: 12px;
                display: flex;
                flex-direction: column;
                gap: 6px;

                .title {
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0;
                }

                .price {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #4ade80;
                    margin: 0;
                }

                .seller {
                    font-size: 0.85rem;
                    color: #888;
                    margin: 0;

                    .verified {
                        color: #3b82f6;
                        font-weight: bold;
                        font-size: 18px;
                    }
                }

                .condition {
                    align-self: flex-start;
                    font-size: 0.75rem;
                    background: #2a2a2a;
                    color: #ccc;
                    padding: 2px 8px;
                    border-radius: 4px;
                    margin-top: 4px;
                }
            }
        }
    }
</style>
